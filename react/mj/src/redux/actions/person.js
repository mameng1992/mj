import {
    SAGA_USER_QUERY,
    UPDATE_USER_INFO,
} from 'actionTypes'


export const queryUserInfo = () => {
    return { type: SAGA_USER_QUERY }
}

export const updateUserInfo = (obj) => {
    return { type: UPDATE_USER_INFO, obj }
}
