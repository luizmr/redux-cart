import * as actionTypes from './auth-types';

export const setUser = (user) => {
	return {
		type: actionTypes.SET_USER,
		payload: {
			user,
		},
	};
};
