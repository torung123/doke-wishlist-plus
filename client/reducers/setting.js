import * as types from '../constants/ActionTypes';

var initialState = { setting: {}, loadingSetting: false };
var setting = (state = initialState, action) => {
    switch(action.type){
        case types.GET_SETTING:
            return {...state, setting: action.payload };
        case types.UPDATE_SETTING:
            return { 
                ...state,
                loadingSetting: false
            };
        case types.LOADING_SETTING:
            return {
                ...state,
                loadingSetting: true
            }
        default:
            return {...state};
    }
}

export default setting;