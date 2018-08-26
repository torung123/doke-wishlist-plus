import * as types from '../constants/ActionTypes';

var initialState = { count : {}, top_product: {}, count_time: '' };
var total_wishlist = (state = initialState, action) => {
    switch(action.type){
        case types.TOTAL_WISHLIST:
            return {...state, count : action.data.count , top_product: action.data.top_product };
        case types.TOTAL_WISHLIST_INTIME:
            return {
                ...state,
                count_time: action.count
            }
        default:
            return {...state};
    }
}

export default total_wishlist;