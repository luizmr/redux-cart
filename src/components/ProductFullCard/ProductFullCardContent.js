import React from 'react';

// components
import BaseComponent from '../ProductCardComponents/BaseComponent';
import ProductBottomComponent from '../ProductCardComponents/ProductBottomComponent';
import QuantityComponent from '../ProductCardComponents/QuantityComponent';
import StorageComponent from '../ProductCardComponents/StorageComponent';
import TotalValueComponent from '../ProductCardComponents/TotalValueComponent';
import TrashComponent from '../ProductCardComponents/TrashComponent';

const ProductFullCardContent = ({ obj, product, setProduct }) => {
	return (
		<div className="card__content">
			<div className="content__img">
				<img src={obj.imageURL} alt={obj.name} />
			</div>
			<div className="content__info">
				<div className="product__main">
					<div className="product__details">
						<BaseComponent price={obj.price.price} />
						<StorageComponent
							quantityAvailable={obj.quantityAvailable}
						/>
						<QuantityComponent
							obj={obj}
							product={product}
							setProduct={setProduct}
						/>
						<TotalValueComponent obj={obj} product={product} />
					</div>
					<TrashComponent setProduct={setProduct} product={product} />
				</div>
				<ProductBottomComponent obj={obj} />
			</div>
		</div>
	);
};

export default ProductFullCardContent;
