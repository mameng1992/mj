package cn.codesign.config.security;

import cn.codesign.common.util.SysConstant;
import cn.codesign.common.util.VerifyCodeUtils;
import cn.codesign.sys.service.SysCacheService;
import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Random;

/**
 * Created with mj.
 * User: Sam
 * Date: 2018/6/2
 * Time: 15:49
 * Description:
 */
@RestController
@RequestMapping("/service/image")
public class VerifyCodeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(VerifyCodeController.class);

    @Resource
    private SysCacheService sysCacheServiceImpl;

    @RequestMapping
    public String getImage(HttpServletResponse response) {

        Random random = new Random(100);

        String key = System.currentTimeMillis() + String.valueOf(random.nextInt(1000));

        String code = VerifyCodeUtils.generateVerifyCode(4);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        try {
            VerifyCodeUtils.outputImage(80, 30, outputStream, code);
            /**验证码入redis同步**/
            this.sysCacheServiceImpl.setStringValue(key, code, 1);
            response.addHeader(SysConstant.CODE_ID, key);
        } catch (IOException e) {
            LOGGER.error("验证码生成失败...",e);
        }


        return Base64.encodeBase64String(outputStream.toByteArray());
    }


}
