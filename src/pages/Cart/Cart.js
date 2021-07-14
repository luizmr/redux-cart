import React, { useState, useEffect } from 'react';

// components
import CartButtons from '../../components/CartButtons/CartButtons';
import CartTabs from '../../components/CartTabs/CartTabs';
import TabArray from './tabArray';
import TabSummary from './components/TabSummary';

// utils
import { connect } from 'react-redux';
import { removeAllFromCart } from '../../store/ShoppingCart/cart-actions';

const Cart = ({ cart, removeAllFromCart }) => {
	const [activeTabArray, setActiveTabArray] = useState([true, false, false]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		setCartItems(cart);
	}, [cart]);

	const handleChangeTab = (id) => {
		const newActiveArray = [];
		TabArray.forEach((obj) => {
			return obj.id === id
				? newActiveArray.push(true)
				: newActiveArray.push(false);
		});
		setActiveTabArray(newActiveArray);
	};

	return (
		<div className="cart">
			<CartButtons handleDeleteItems={removeAllFromCart} cart={cart} />
			<CartTabs
				tabArray={TabArray}
				activeArray={activeTabArray}
				handleChangeTab={handleChangeTab}
			/>
			<TabSummary items={cartItems} activeArray={activeTabArray} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps, { removeAllFromCart })(Cart);
