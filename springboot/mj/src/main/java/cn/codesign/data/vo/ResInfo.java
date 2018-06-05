package cn.codesign.data.vo;

import cn.codesign.config.security.TokenInfo;

/**
 * Created with codesign.
 * User: Sam
 * Date: 2017/5/27
 * Time: 15:48
 * Description:统一返回数据封装，所有请求返回必须采用此封装
 */
public class ResInfo {

    private String resCode;
    private String resMsg;
    private Object resInfo;
    private TokenInfo tokenInfo;
    private String status;

    public String getResCode() {
        return resCode;
    }

    public void setResCode(String resCode) {
        this.resCode = resCode;
    }

    public String getResMsg() {
        return resMsg;
    }

    public void setResMsg(String resMsg) {
        this.resMsg = resMsg;
    }

    public Object getResInfo() {
        return resInfo;
    }

    public void setResInfo(Object resInfo) {
        this.resInfo = resInfo;
    }

    public TokenInfo getTokenInfo() {
        return tokenInfo;
    }

    public void setTokenInfo(TokenInfo tokenInfo) {
        this.tokenInfo = tokenInfo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
