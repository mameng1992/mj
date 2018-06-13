import { post } from 'commonjs/request'
import { call, put, select } from "redux-saga/es/effects";
import {
    UPDATE_USER_INFO,
} from 'actionTypes'

export function* query() {
    try {
        /**查询用户信息**/
        const result = yield call(post, '/user/query')
        let obj = yield select(v => v.get('person'))
        obj = obj.setIn(['userInfo','nickName','defaultValue'],result.data.resInfo.nickName)
            .setIn(['userInfo','mobilePhone','defaultValue'],result.data.resInfo.mobilePhone)
            .set('isQuery',true)
        /**更新用户信息状态**/
        yield put({type: UPDATE_USER_INFO, obj})
    } catch (e) {

    }
}




