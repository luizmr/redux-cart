export const initialState = {
	cart: localStorage.getItem('products')
		? JSON.parse(localStorage.getItem('products'))
		: [],
	user: localStorage.getItem('client')
		? JSON.parse(localStorage.getItem('client'))
		: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'ADD_TO_CART': {
			const productFound = state.cart.find(
				(obj) => obj.id === action.item.id,
			);
			if (productFound) {
				const newCart = state.cart.map((obj) => {
					if (obj.id === productFound.id) {
						return {
							...obj,
							quantity: action.item.quantity,
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
				JSON.stringify([...state.cart, action.item]),
			);
			return { ...state, cart: [...state.cart, action.item] };
		}
		case 'REMOVE_FROM_CART': {
			const newCart = [...state.cart];

			if (action.item.quantity <= 1) {
				const index = state.cart.findIndex((cartItem) => {
					return cartItem.id === action.item.id;
				});
				if (index >= 0) {
					newCart.splice(index, 1);
				}
				localStorage.setItem('products', JSON.stringify(newCart));
				return { ...state, cart: newCart };
			}

			const productFound = state.cart.find(
				(obj) => obj.id === action.item.id,
			);

			const newCartRemoval = state.cart.map((obj) => {
				if (obj.id === productFound.id) {
					return {
						...obj,
						quantity: action.item.quantity,
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
		case 'REMOVE_ALL': {
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

export default reducer;
