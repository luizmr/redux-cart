import React from 'react';

const ProductBottomComponent = ({ obj }) => {
	return (
		<div className="product__bottom">
			<div className="bottom__chip">
				<p>Similares</p>
			</div>
			<div className="bottom__chip">
				<p>{obj.maker}</p>
			</div>
		</div>
	);
};

export default ProductBottomComponent;
