import {
    UPDATE_USER_INFO,
} from 'actionTypes'
import Immutable from 'immutable'




const initialState = Immutable.fromJS({
    userInfo: {
        nickName: {
            label: '别名',
            required: true,
            defaultValue: '',
        },
        mobilePhone: {
            label: '手机号码',
            required: false,
            defaultValue: '',
        },
    },
    isEdit: false,
    isQuery: false,
})

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return state.merge(action.obj)
        default:
            return state
    }
}