import { combineReducers } from 'redux';
import cartReducer from './ShoppingCart/cart-reducer';
import authReducer from './Authentication/auth-reducer';

const reducer = combineReducers({
	cart: cartReducer,
	auth: authReducer,
});

export default reducer;
