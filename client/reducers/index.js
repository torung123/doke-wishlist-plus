import { combineReducers } from 'redux';
import total_wishlist from './total_wishlist';
import setting from './setting';

const myReducer = combineReducers({
    total_wishlist,
    setting
});

export default myReducer;