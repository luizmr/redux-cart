import * as actionTypes from './auth-types';

const INITIAL_STATE = {
	user: localStorage.getItem('client')
		? JSON.parse(localStorage.getItem('client'))
		: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.payload.user,
			};
		default:
			return state;
	}
};

export default authReducer;
