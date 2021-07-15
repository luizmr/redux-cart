import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material-ui/icons
import { Button } from '@material-ui/core';
import { FiTrash, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

// utils
import ReducePrice from '../../utils/reducePrice';

const CartButtons = ({ handleDeleteItems, cart, toPayment }) => {
	const history = useHistory();
	const [finalPrice, setFinalPrice] = useState(0);

	useEffect(() => {
		if (cart.length) {
			setFinalPrice(ReducePrice(cart));
		} else {
			setFinalPrice(0);
		}
	}, [cart]);

	return (
		<div className="cart__header">
			<Button
				className="button__back button__common"
				onClick={() => {
					history.push('/');
				}}
			>
				<FiArrowLeft />
				<p>Voltar</p>
			</Button>
			{!!cart.length && (
				<div className="buttons__right">
					{finalPrice >= 150 && (
						<Button
							className="button__payment button__common"
							onClick={() => {
								!toPayment && history.push('/cart');
							}}
						>
							<p>
								{toPayment
									? 'Ir para pagamento'
									: 'Ir para o Carrinho'}
							</p>
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
};

export default CartButtons;
