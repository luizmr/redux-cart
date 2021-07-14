import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material-ui/icons
import { Button } from '@material-ui/core';
import { FiTrash, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function CartButtons({ handleDeleteItems, cart }) {
	const history = useHistory();

	const [finalPrice, setFinalPrice] = useState(0);

	useEffect(() => {
		if (cart.length) {
			const priceArray = [];
			cart.forEach((obj) => {
				if (obj.price) {
					const price = obj.price.price * obj.quantity;
					priceArray.push(price);
				}
			});

			setFinalPrice(priceArray.reduce((acc, curr) => acc + curr, 0));
		} else {
			setFinalPrice(0);
		}
	}, [cart]);

	return (
		<div className="cart__header">
			<Button
				className="button__back button__common"
				onClick={() => history.push('/')}
			>
				<FiArrowLeft />
				<p>Voltar</p>
			</Button>
			{!!cart.length && (
				<div className="buttons__right">
					{finalPrice >= 150 && (
						<Button
							className="button__payment button__common"
							onClick={() => history.push('/')}
						>
							<p>Ir para pagamento</p>
							<FiArrowRight />
						</Button>
					)}
					<Button
						onClick={handleDeleteItems}
						className="button__clear button__common"
					>
						<p>Limpar carrinho</p>
						<FiTrash />
					</Button>
				</div>
			)}
		</div>
	);
}
