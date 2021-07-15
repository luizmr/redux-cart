import React from 'react';

// utils
import ConvertToBrl from '../../utils/convertToBrl';

const TotalValueComponent = ({ product, obj }) => {
	return (
		<div className="detail__value">
			<p className="detail__title">Valor</p>
			<div className="base__content">
				<span>
					{Number(product.quantity) > 0
						? ConvertToBrl(
								obj.price.price * Number(product.quantity),
						  )
						: ConvertToBrl(0)}
				</span>
			</div>
		</div>
	);
};

export default TotalValueComponent;
