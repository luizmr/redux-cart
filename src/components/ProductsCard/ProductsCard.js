import React from 'react';

// material-ui/icons
import { FaRegFrown } from 'react-icons/fa';

// components
import ProductInfoCart from './components/ProductInfoCart';

const ProductsCard = ({ items }) => {
	return (
		<div className="summary__products">
			<div className="products__header">
				<div className="header__info">
					<p>Produtos</p>
				</div>
			</div>
			{items.length ? (
				<>
					{items.map((obj) => (
						<ProductInfoCart key={obj.cod} obj={obj} />
					))}
				</>
			) : (
				<div className="products__info">
					<div className="product__empty">
						<p>Carrinho Vazio</p>
						<FaRegFrown />
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductsCard;
