package cn.codesign.sys.service;

import cn.codesign.sys.data.model.SysDict;
import cn.codesign.sys.data.model.SysErrorInfo;
import org.springframework.security.access.ConfigAttribute;

import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * Created with codesign.
 * User: Sam
 * Date: 2017/5/27
 * Time: 15:30
 * Description:
 */
public interface SysCacheService {

    /**
     * @User Sam
     * @Date 2017/6/20
     * @Time 09:21
     * @param
     * @return
     * @Description 获取所有错误码
     */
    Map<String,SysErrorInfo> getErrorAll();


    /**
     * @User Sam
     * @Date 2017/6/20
     * @Time 09:21
     * @param
     * @return
     * @Description 获取所有字典
     */
    Map<String,Map<String,SysDict>> getDict();

    /**
     * @User Sam
     * @Date 2018/4/30
     * @Time 01:49
     * @param
     * @return
     * @Description 获取所有权限
     */
    Map<String, Collection<ConfigAttribute>> getAllAuthority();


    /**
     * @User Sam
     * @Date 2018/4/26
     * @Time 15:44
     * @param key:rediskey, value:redisvlaue, time:过期时间(分钟)
     * @return
     * @Description setString类型到redis，过期时间为time分钟
     */
    void setStringValue(String key, String value, int time);

    
    /**
     * @User Sam
     * @Date 2018/4/26
     * @Time 15:53
     * @param key:rediskey
     * @return
     * @Description 根据key获取redis中对应值
     */
    String getStringvalue(String key);

    /**
     * 获取不受security和jwt保护的服务
     * @return
     */
    List<String> getIgnoreService();
}
