import * as types from '../constants/ActionTypes';
import callApi from './../utils/apiCaller';


export const totalLoveRequest = (shopName) => {
    return dispatch => {
        return callApi(`total-love/${shopName}`, 'GET', null).then(res => {
            dispatch(totalLoveCount(res.data.data));
        })
    }
}

export const totalLoveCount = (data) => {
    return {
        type : types.TOTAL_WISHLIST,
        data
    }
}

export const totalLoveIntimeRequest = (time, shopName) => {
    return dispatch => {
        return callApi(`filter/${time}/${shopName}`, 'GET', null).then(res => {
            dispatch(totalLoveCountIntime(res.data.count_love));
        })
    }
}

export const totalLoveCountIntime = (count) => {
    return {
        type : types.TOTAL_WISHLIST_INTIME,
        count
    }
}

export const getSetting = (shopName) => {
    return dispatch => {
        return callApi(`setting/${shopName}`, 'GET', null).then(res => {
            dispatch(setting(res.data.setting));
        })
    }
}

export const setting = (setting) => {
    return {
        type : types.GET_SETTING,
        payload: setting
    }
}

export const updateSetting = (setting, shopName) => {
    return dispatch => {
        dispatch(loadingSetting());
        return callApi(`update-settings/${shopName}`, 'POST', setting).then(res => {
            dispatch(updateSettingSuccess(res.data));
        })
    }
}

export const updateSettingSuccess = (data) => {
    return {
        type : types.UPDATE_SETTING,
        payload: data
    }
}

export const loadingSetting = () => {
    return {
        type: types.LOADING_SETTING
    }
}