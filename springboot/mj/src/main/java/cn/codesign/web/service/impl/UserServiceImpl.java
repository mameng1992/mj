package cn.codesign.web.service.impl;

import cn.codesign.web.data.mapper.SysUserMapper;
import cn.codesign.web.data.model.SysUser;
import cn.codesign.web.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created with mj.
 * User: Sam
 * Date: 2018/6/6
 * Time: 21:03
 * Description:
 */
@Service
public class UserServiceImpl implements UserService {

    @Resource
    private SysUserMapper sysUserMapper;

    /**
     * @User Sam
     * @Date 2018/6/6
     * @Time 21:04
     * @param id:userid;
     * @return
     * @Description 获取用户信息
     */
    @Override
    public SysUser getUser(String id) {
        SysUser sysUser = this.sysUserMapper.getUser(id);
        if(sysUser.getMobilePhone() != null && !"".equalsIgnoreCase(sysUser.getMobilePhone())) {
            sysUser.setMobilePhone(
                    String.format("%11s",sysUser.getMobilePhone().substring(7)).replaceAll(" ","*")
            );
        }
        return sysUser;
    }
}
