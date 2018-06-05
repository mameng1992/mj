import {
    CHANGE_LEFT_MENU,
} from 'actionTypes'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    leftShow: false,
    title: '个人中心',
})


export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LEFT_MENU:
            return state.merge(Immutable.fromJS(action.obj))
        default:
            return state
    }
}