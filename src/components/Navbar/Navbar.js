import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material-ui/icons
import { Badge, Avatar, IconButton, Button } from '@material-ui/core';
import { FaRegBell } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

// assets
import Logo from '../../assets/images/logo.png';

import ConvertToBrl from '../../utils/convertToBrl';

// utils
import { connect } from 'react-redux';

const Navbar = ({ user, cart }) => {
	const [finalPrice, setFinalPrice] = useState(0);
	const history = useHistory();
	useEffect(() => {
		if (cart.length) {
			const priceArray = [];
			cart.forEach((obj) => {
				if (obj.price) {
					const price = obj.price.price * obj.quantity;
					priceArray.push(price);
				}
			});
			setFinalPrice(priceArray.reduce((acc, curr) => acc + curr, 0));
		} else {
			setFinalPrice(0);
		}
	}, [cart]);
	return (
		<div className="navbar">
			<img
				src={Logo}
				alt="Logo"
				onClick={() => history.push('/')}
				aria-hidden="true"
			/>
			<div className="navbar__info">
				<div className="navbar__infoCart">
					<p>Redux cart</p>
					<Button
						className="infoCart__cart"
						onClick={() => history.push('/cart')}
					>
						<FiShoppingCart />

						<p>{ConvertToBrl(finalPrice)}</p>
					</Button>
					<p>Pedido mínimo: R$ 150,00</p>
				</div>
				<div className="navbar__infoUser">
					<IconButton aria-label="notification">
						<Badge badgeContent={cart.length} color="secondary">
							<FaRegBell />
						</Badge>
					</IconButton>
					<Avatar>{user ? user.name.slice(0, 1) : 'U'}</Avatar>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(Navbar);
