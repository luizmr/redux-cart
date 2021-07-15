import React, { useEffect, useState, memo } from 'react';

// material-ui/icons
import { FaBarcode } from 'react-icons/fa';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

// utils
import { connect } from 'react-redux';
import ProductFullCardContent from './ProductFullCardContent';

const ProductFullCard = memo(({ obj, cart, addToCart, removeFromCart }) => {
	const [product, setProduct] = useState({
		quantity: '',
	});

	useEffect(() => {
		if (cart.length) {
			const productFound = cart.find((el) => el.cod === obj.cod);
			if (productFound) {
				setProduct(productFound);
			}
		}
	}, []);

	useEffect(() => {
		if (cart.length === 0) {
			setProduct({ ...product, quantity: 0 });
		}
	}, [cart]);

	return (
		<div className="product__card">
			<div className="card__header">
				<div className="header__info">
					<div className="header__chip">{obj.cod}</div>
					<p>{obj.name}</p>
				</div>
				<div className="header__icons">
					<FaBarcode />
					<InfoOutlinedIcon />
				</div>
			</div>
			<ProductFullCardContent
				obj={obj}
				product={product}
				setProduct={setProduct}
			/>
		</div>
	);
});

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(ProductFullCard);
