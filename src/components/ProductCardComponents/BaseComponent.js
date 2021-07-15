import React from 'react';

//utils
import ConvertToBrl from '../../utils/convertToBrl';

const BaseComponent = ({ price }) => {
	return (
		<div className="detail__base">
			<p className="detail__title">Base</p>
			<div className="base__content">
				<p>Nosso preço</p>
				<span>{ConvertToBrl(price)}</span>
			</div>
		</div>
	);
};

export default BaseComponent;
