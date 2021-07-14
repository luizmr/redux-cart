import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../store/StateProvider';
import ConvertToBrl from '../../utils/convertToBrl';

// components
import InfoDiv from '../InfoDiv/InfoDiv';

export default function TotalCard() {
	const [{ cart }] = useStateValue();
	const [finalPrice, setFinalPrice] = useState(0);
	const [finalTaxes, setFinalTaxes] = useState(0);

	useEffect(() => {
		if (cart.length) {
			const priceArray = [];
			const taxArray = [];

			cart.forEach((obj) => {
				if (obj.price) {
					const price = obj.price.price * obj.quantity;
					priceArray.push(price);
					taxArray.push(obj.price.taxes);
				}
			});
			setFinalPrice(priceArray.reduce((acc, curr) => acc + curr, 0));
			setFinalTaxes(taxArray.reduce((acc, curr) => acc + curr, 0));
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
}
