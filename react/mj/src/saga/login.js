import { select, put,call } from 'redux-saga/effects'
import { post } from 'commonjs/request'
import qs from 'qs'
import {
    CHANGE_LOGIN_FORM,
} from 'actionTypes'
import store from 'store'

/**
 * 登陆提交
 * @returns {IterableIterator<*>}
 */
export function* login(action) {
    let obj = {}
    const login = yield select(v => v.get('login'))
    let errorList = login.get('errorList')
    const params = {
        uid: login.get('name'),
        pwd: login.get('password'),
        code: login.get('code'),
        codeId: login.get('codeId'),
    }


    /**数据校验**/
    if(params.uid === null || params.uid === '') {
        obj = {msgShow: true, msg: '请输入用户名...'}
        yield put({type:CHANGE_LOGIN_FORM,obj})
        return false
    }
    if(params.pwd === null || params.pwd === '') {
        obj = {msgShow: true, msg: '请输入密码...'}
        yield put({type:CHANGE_LOGIN_FORM,obj})
        return false
    }
    if(login.get('codeShow') === ''){
        if(params.code === null || params.code === ''){
            obj = {msgShow: true, msg: '请输入验证码...'}
            yield put({type:CHANGE_LOGIN_FORM,obj})
            return false
        }
    }

    /**security接收参数需要序列化，单独使用qs转换**/
    try {
        //提交按钮不可用
        obj = {disabled: true, msgShow: false,loading: 'indeterminate'}

        yield put({type:CHANGE_LOGIN_FORM,obj})
        const result = yield call(post, '/manage/login', qs.stringify(params))
        /**判断登陆结果**/
        if(result.data.resCode === 'SUCCESS') {//登陆成功
            action.props.updateRoutes(result.auth)
            /**清除密码记录状态**/
            obj = getError('',{errorList: []})
            yield put({type:CHANGE_LOGIN_FORM,obj})
            action.props.history.replace('/home')
        } else {//登陆失败
            yield call(changeCode)//阻塞调用验证码刷新
            if(!errorList.includes(params.uid)) {
                obj = getError(result.data.resMsg,{codeShow:'',errorList: errorList.push(params.uid).toJS()})
            } else {
                obj = getError(result.data.resMsg,{codeShow:''})
            }
            yield put({type:CHANGE_LOGIN_FORM,obj})
        }
    } catch (e) {
        obj = getError('系统繁忙，请稍后再试...')
        yield put({type:CHANGE_LOGIN_FORM,obj})
    }


}

/**
 * 退出登录
 * @param action
 * @returns {IterableIterator<*>}
 */
export function* loginOut(action) {
    store.clearAll()
    window.location.replace('/login')
}


/**
 * 获取验证码
 * @returns {IterableIterator<*>}
 */
export function* changeCode() {
    let obj = {}
    try {
        const result = yield call(post, '/image')
        const obj = {src: result.data,codeId:result.headers.code_id}
        yield put({type:CHANGE_LOGIN_FORM,obj})
    } catch (e) {
        obj = getError('系统繁忙，请稍后再试...')
        yield put({type:CHANGE_LOGIN_FORM,obj})
    }
}

/**
 * 检查用户是否需要验证码
 * @returns {IterableIterator<*>}
 */
export function* checkName() {
    const login = yield select(v => v.get('login'))
    let obj = {}
    if(login.get('errorList').includes(login.get('name'))) {
        obj['codeShow'] = ''
    } else {
        obj['codeShow'] = 'none'
    }
    yield put({type:CHANGE_LOGIN_FORM,obj})
}

/**
 * 错误状态处理
 * @param msg
 * @param args
 * @returns {*}
 */
const getError = (msg,args) => {
    let result =  {
        name: '',
        password: '',
        code: '',
        disabled: false,
        msgShow: true,
        msg: msg,
        loading: 'determinate',
    }
    return Object.assign(result, args)
}

