package cn.codesign.sys.data.mapper;

import cn.codesign.sys.data.model.SysAuthority;
import cn.codesign.sys.data.model.SysUserAndAuth;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * Created with codesign.
 * User: Sam
 * Date: 2017/3/22
 * Time: 10:38
 * Description:
 */
public interface SecurityMapper {

    /**
     * @User Sam
     * @Date 2017/3/22
     * @Time 11:25
     * @param id: userid
     * @return 权限集合
     * @Description 获取指定给用户的权限集合
     */
    List<SysAuthority> getAuthority(@Param("id")String id);


    /**
     * @User Sam
     * @Date 2017/3/22
     * @Time 12:50
     * @param userName 用户名
     * @return UserInfo 用户信息
     * @Description 获取用户信息
     */
    SysUserAndAuth getUser(@Param("userName")String userName, @Param("type") String type);

    /**
     * @User Sam
     * @Date 2017/3/23
     * @Time 16:26
     * @return 权限集合
     * @Description 获取所有权限
     */
    List<Map<String,String>> getAllAuthority();

    /**
     * @User Sam
     * @Date 2018/5/23
     * @Time 21:20
     * @param userid
     * @return SysUserAndAuth
     * @Description 获取用户
     */
    SysUserAndAuth getSysUser(@Param("id") String id);
}
