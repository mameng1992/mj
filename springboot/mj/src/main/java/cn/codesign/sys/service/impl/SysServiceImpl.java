package cn.codesign.sys.service.impl;

import cn.codesign.common.util.SysConstant;
import cn.codesign.config.security.JwtUtil;
import cn.codesign.config.security.TokenInfo;
import cn.codesign.data.vo.ResInfo;
import cn.codesign.sys.data.mapper.SecurityMapper;
import cn.codesign.sys.data.model.SysAuthority;
import cn.codesign.sys.data.model.SysUserAndAuth;
import cn.codesign.sys.data.model.SysUserAuthority;
import cn.codesign.sys.service.SysService;
import io.jsonwebtoken.Claims;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Created with mj.
 * User: Sam
 * Date: 2018/4/30
 * Time: 17:04
 * Description:
 */
@Service
public class SysServiceImpl implements SysService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysServiceImpl.class);

    @Resource
    private JwtUtil jwtUtil;

    @Resource
    private SecurityMapper securityMapper;

    @Value("${jwt.update}")
    private long time;



    /**
     * @User Sam
     * @Date 2018/5/3
     * @Time 08:38
     * @param
     * @return
     * @Description 生成token信息
     */
    @Override
    public TokenInfo resToken(SysUserAndAuth sysUserAndAuth) {
        SysUserAuthority sysUserAuthority = getSysUserAuthority(sysUserAndAuth.getId());
        List<SysAuthority> list = sysUserAuthority.getSysAuthority();
        List<SysAuthority> l1 = list.stream().filter(v -> v.getAuthorityLevel() == 1).collect(Collectors.toList());
        List<SysAuthority> l2 = list.stream().filter(v -> v.getAuthorityLevel() == 2).collect(Collectors.toList());
        List<SysAuthority> l3 = list.stream().filter(v -> v.getAuthorityLevel() == 3).collect(Collectors.toList());
        Map<String,Map<String,SysAuthority>> route = new HashMap<>();
        Map<String,List<SysAuthority>> menu = new HashMap<>();
        l1.stream().forEach(v -> {
            route.put(v.getUrl(), l2.stream().filter(m -> v.getId().equals(m.getAuthorityParentId()))
                    .collect(Collectors.toMap(SysAuthority::getUrl,Function.identity())));
        });
        l2.stream().forEach(v -> {
            menu.put(v.getUrl(), l3.stream().filter(m -> v.getId().equals(m.getAuthorityParentId()))
                    .collect(Collectors.toList()));
        });

        TokenInfo tokenInfo = new TokenInfo();
        tokenInfo.setToken(this.jwtUtil.getJwtToken(sysUserAndAuth.getId(),sysUserAuthority.getAuthorities()));
        tokenInfo.setRoutes(route);
        tokenInfo.setMenu(menu);
        return tokenInfo;
    }

    /**
     * 获取用户权限
     * @param name
     * @return
     */
    @Override
    public SysUserAuthority getSysUserAuthority(String name) {
        List<GrantedAuthority> auths = new ArrayList<GrantedAuthority>();
        List<SysAuthority> list = this.securityMapper.getAuthority(name);
        if(list.size() == 0){
            return null;
        }

        /**authority名称会影响jwt获取对象里面的key**/
        SimpleGrantedAuthority authority = null;
        for(SysAuthority sysAuthority : list){
            authority  = new SimpleGrantedAuthority(sysAuthority.getId());
            auths.add(authority);
        }
        SysUserAuthority sysUserAuthority = new SysUserAuthority();
        sysUserAuthority.setSysAuthority(list);
        sysUserAuthority.setAuthorities(auths);
        return sysUserAuthority;
    }

    @Override
    public void updateToken(HttpServletResponse httpServletResponse, Claims claims, ResInfo resInfo) {
        if(claims != null) {
            //判断是否快超时
            long t = claims.getExpiration().getTime() - System.currentTimeMillis();
            if (t < this.time) {//需要更新token
                SysUserAndAuth sysUserAndAuth = this.securityMapper.getSysUser(claims.getSubject());
                //检查用户状态
                if(sysUserAndAuth.getUserStatus() == SysConstant.USER_STATUS_PROHIBITED) {//强制下线
                    LOGGER.warn(claims.getSubject() + ":" + SysConstant.USER_PROHIBITED);
                    resInfo.setStatus(SysConstant.USER_STATUS_SHUTDOWN);
                } else {//放入新token提供给前端更新
                    TokenInfo tokenInfo = resToken(sysUserAndAuth);
                    httpServletResponse.addHeader(SysConstant.JWT_ACCESS_TOKEN,tokenInfo.getToken());
                    resInfo.setTokenInfo(tokenInfo);
                }
            }
        }
    }


}
