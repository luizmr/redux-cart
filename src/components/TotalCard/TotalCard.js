import React, { useEffect, useState } from 'react';
import ConvertToBrl from '../../utils/convertToBrl';

// components
import InfoDiv from '../InfoDiv/InfoDiv';

// utils
import { connect } from 'react-redux';
import ReducePrice from '../../utils/reducePrice';

const TotalCard = ({ cart }) => {
	const [finalPrice, setFinalPrice] = useState(0);
	const [finalTaxes, setFinalTaxes] = useState(0);

	useEffect(() => {
		if (cart.length) {
			const reducedValues = ReducePrice(cart, true);
			setFinalPrice(reducedValues[0]);
			setFinalTaxes(reducedValues[1]);
		} else {
			setFinalPrice(0);
			setFinalTaxes(0);
		}
	}, [cart]);
	return (
		<div className="summary__products">
			<div className="products__header">
				<div className="header__info">
					<p>Valor</p>
				</div>
			</div>
			<div className="products__total">
				<div className="fees">
					<InfoDiv
						title="Total"
						subtitle="(sem impostos)"
						info={ConvertToBrl(finalPrice)}
						spanClass="info__string"
					/>

					<InfoDiv
						title="Impostos"
						info={ConvertToBrl(finalTaxes)}
						spanClass="info__string"
					/>
				</div>
				<InfoDiv
					title="Total:"
					info={ConvertToBrl(finalPrice + finalTaxes)}
					spanClass="info__string"
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(TotalCard);
