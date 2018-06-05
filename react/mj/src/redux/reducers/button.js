import {
    CHANGE_BUTTON_STATE,
} from 'actionTypes'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    isHidden: false,
    isShow: false,
    buttons: []
})


export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BUTTON_STATE:
            return state.merge(Immutable.fromJS(action.sta))
        default:
            return state
    }
}