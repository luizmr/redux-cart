import React from 'react';

// components
import BaseComponent from '../ProductCardComponents/BaseComponent';
import StorageComponent from '../ProductCardComponents/StorageComponent';

const ProductSimpleCardContent = ({ obj }) => {
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
					</div>
				</div>
				<div className="product__bottom">
					<div className="bottom__chip">
						<p>Similares</p>
					</div>
					<div className="bottom__chip">
						<p>{obj.maker}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductSimpleCardContent;
