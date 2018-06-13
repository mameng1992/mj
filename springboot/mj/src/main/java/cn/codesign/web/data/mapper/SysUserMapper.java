package cn.codesign.web.data.mapper;

import cn.codesign.web.data.model.SysUser;
import org.apache.ibatis.annotations.Param;

public interface SysUserMapper {

    SysUser getUser(@Param("id") String id);

}