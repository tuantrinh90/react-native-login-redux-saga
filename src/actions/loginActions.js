import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';
export const login = (params) => {
    return {
        type: LOGIN,
        isLoading: true,
        isError: false,
        params: { email: 'hoangpt@hblab.vn', password: '123456' }
    }
}
export const loginSuccess = (userInfo) => {
    return {
        type: LOGIN_SUCCESS,
        isLoading: false,
        isError: false,
        userInfo: userInfo
    }
}
export const loginFailed = () => {
    return {
        type: LOGIN_FAILED,
        isLoading: false,
        isError: true,
    }
}