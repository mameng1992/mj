package cn.codesign.web.service;

import cn.codesign.web.data.model.SysUser;

/**
 * Created with mj.
 * User: Sam
 * Date: 2018/6/6
 * Time: 20:47
 * Description:
 */
public interface UserService {

    /**
     * @User Sam
     * @Date 2018/6/6
     * @Time 21:02
     * @param id:userid;
     * @return 
     * @Description 获取用户信息
     */
    SysUser getUser(String id);

}
