import React, { useEffect, useState } from 'react';
import CartButtons from '../../components/CartButtons/CartButtons';

// components
import ProductFullCard from '../../components/ProductFullCard/ProductFullCard';

// json
import ProductsData from '../../data/products.json';

// utils
import { connect } from 'react-redux';
import { removeAllFromCart } from '../../store/ShoppingCart/cart-actions';

const ProductInfo = ({ cart, removeAllFromCart }) => {
	const [product, setProduct] = useState(null);
	const productPathname = window.location.pathname;
	const productId = productPathname.substring(
		productPathname.lastIndexOf('/') + 1,
	);

	useEffect(() => {
		const productFound = ProductsData.find(
			(obj) => obj.cod === Number(productId) && obj.quantityAvailable > 0,
		);
		if (productFound) {
			setProduct(productFound);
		}
	}, []);

	return (
		<div className="products">
			<div className="products__page">
				<CartButtons
					handleDeleteItems={removeAllFromCart}
					cart={cart}
					toPayment={false}
				/>
				<div className="products__pageContent">
					{product ? (
						<ProductFullCard obj={product} key={productId} />
					) : (
						<div className="products__cards">
							<div className="not-found">
								<p>
									Desculpa, mas o produto procurado não pôde
									ser encontrado ou encontra-se indisponível
									em nosso estoque.{' '}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps, { removeAllFromCart })(ProductInfo);
