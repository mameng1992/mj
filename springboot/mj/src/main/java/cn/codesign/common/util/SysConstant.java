package cn.codesign.common.util;


import java.util.HashMap;
import java.util.Map;

public class SysConstant {

    public static final String SECURITY_AUTHORITY_ERROR = "无权访问，请联系管理员授权";

    public static final String SECURITY_NAME_OR_PWD_ERROR = "用户名或密码错误";

    public static final String LOGIN_USERNAME_NULL = "请输入用户名...";

    public static final String LOGIN_PASSWORD_NULL = "请输入密码...";

    public static final String LOGIN_MAX_ERROR = "登陆过于频繁，休息下吧...";

    public static final String LOGIN_VERIFY_ERROR = "验证码错误...";

    public static final String AJAX_RESULT_SUCCESS = "SUCCESS";

    public static final String AJAX_RESULT_ERROR = "ERROR";

    public static final String SECURITY_AUTHORITY_ID = "AUTHORITY_ID";

    public static final String SECURITY_URL = "URL";

    public static final String JWT_AUTHORIZATION_TOKEN = "Authorization";

    public static final String JWT_ACCESS_TOKEN = "access_token";

    public static final String JWT_ROUTES = "access_routes";

    public static final String JWT_MENU = "access_menu";

    public static final String JWT_ALG = "alg";

    public static final String JWT_TYP = "typ";

    public static final String JWT_HS512 = "HS512";

    public static final String JWT = "JWT";

    public static final String JWT_BEARER = "Bearer ";

    public static final String JWT_AUTH = "auth";

    public static final String JWT_AUTHORITY = "authority";

    public static final String JWT_PARAM_CODE = "code";

    public static final String JWT_PARAM_CODE_ID = "codeId";

    public static final String CODE_ID = "code_id";

    public static final int USER_STATUS_PROHIBITED = 0;

    public static final String USER_STATUS_SHUTDOWN = "0";

    public static final String USER_PROHIBITED = "该用户禁止登陆";

    public static final Map<String, Object> JWT_MAP = new HashMap<>();

    static {
        JWT_MAP.put(JWT_ALG, JWT_HS512);
        JWT_MAP.put(JWT_TYP, JWT);
    }

    public static final String LOGIN_TYPE_PWD = "01";

    /**
     * 返回类型
     */
    public static final String JSON_CONTENTTYPE = "application/json;charset=UTF-8";

    public static final String CHARSET_UTF8 = "UTF-8";

    /**
     * 错误名称
     */
    public static final String ERROR_INFO_NAME = "errorInfo";

    /**
     * 异步请求类型
     */
    public static final String REQUEST_AJAX_TYPE = "XMLHttpRequest";

    /**
     * 异步请求头部
     */
    public static final String REQUEST_AJAX_HEADR = "X-Requested-With";


    /*******************************错误码***************************************/
    public static final String E99999 = "系统错误";



}
