package cn.codesign.web.controller;

import cn.codesign.base.BaseController;
import cn.codesign.common.util.SysConstant;
import cn.codesign.data.vo.ResInfo;
import cn.codesign.web.service.UserService;
import io.jsonwebtoken.Claims;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * Created with mj.
 * User: Sam
 * Date: 2018/6/6
 * Time: 19:33
 * Description:
 */
@Controller
public class UserController extends BaseController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Resource
    private UserService userServiceImpl;

    @ResponseBody
    @PostMapping("/user/query")
    public ResInfo query() {
        Claims claims = (Claims) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ResInfo resInfo = new ResInfo();
        resInfo.setResCode(SysConstant.AJAX_RESULT_SUCCESS);
        resInfo.setResInfo(this.userServiceImpl.getUser(claims.getSubject()));
        return resInfo;
    }
}
