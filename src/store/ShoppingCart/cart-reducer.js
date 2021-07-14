import * as actionTypes from './cart-types';

const INITIAL_STATE = {
	cart: localStorage.getItem('products')
		? JSON.parse(localStorage.getItem('products'))
		: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART: {
			const productFound = state.cart.find(
				(obj) => obj.cod === action.payload.item.cod,
			);
			if (productFound) {
				const newCart = state.cart.map((obj) => {
					if (obj.cod === productFound.cod) {
						return {
							...obj,
							quantity: action.payload.item.quantity,
						};
					}
					return obj;
				});

				localStorage.setItem('products', JSON.stringify(newCart));

				return {
					...state,
					cart: newCart,
				};
			}
			localStorage.setItem(
				'products',
				JSON.stringify([...state.cart, action.payload.item]),
			);
			return { ...state, cart: [...state.cart, action.payload.item] };
		}
		case actionTypes.REMOVE_FROM_CART: {
			const newCart = [...state.cart];

			if (action.payload.item.quantity <= 1) {
				const index = state.cart.findIndex((cartItem) => {
					return cartItem.cod === action.payload.item.cod;
				});
				if (index >= 0) {
					newCart.splice(index, 1);
				}
				localStorage.setItem('products', JSON.stringify(newCart));
				return { ...state, cart: newCart };
			}

			const productFound = state.cart.find(
				(obj) => obj.cod === action.payload.item.cod,
			);

			const newCartRemoval = state.cart.map((obj) => {
				if (obj.cod === productFound.cod) {
					return {
						...obj,
						quantity: action.payload.item.quantity,
					};
				}
				return obj;
			});

			localStorage.setItem('products', JSON.stringify(newCartRemoval));

			return {
				...state,
				cart: newCartRemoval,
			};
		}
		case actionTypes.REMOVE_ALL: {
			localStorage.setItem('products', JSON.stringify([]));
			return {
				...state,
				cart: [],
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
