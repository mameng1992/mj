package cn.codesign.web.controller;

import cn.codesign.base.BaseController;
import cn.codesign.data.vo.ResInfo;
import cn.codesign.web.service.GlobalService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created with mj.
 * User: Sam
 * Date: 2018/4/18
 * Time: 08:22
 * Description:
 */
@RestController
public class TestController extends BaseController {

    @Resource
    private GlobalService globalServiceImpl;



    @RequestMapping("/test3")
    public String test3() {
        return "test3";
    }

    @RequestMapping("/test2")
    public ResInfo test2() throws Exception {
        ResInfo resInfo = new ResInfo();
        resInfo.setResCode("SUCCESS");
        resInfo.setResMsg("test2");
//        throw new BusinessException(getErrorInfo("E99999"));
        return resInfo;
    }
}
