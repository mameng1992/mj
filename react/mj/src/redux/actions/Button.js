import {
    CHANGE_BUTTON_STATE,
} from 'actionTypes'


export const changeBtnSta = (sta, buttons) => {
    return { type: CHANGE_BUTTON_STATE, sta, buttons}
}
