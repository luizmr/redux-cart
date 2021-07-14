import React from 'react';

// material-ui/icons
import { FaRegFrown } from 'react-icons/fa';

// utils
import ConvertToBrl from '../../utils/convertToBrl';

export default function ProductsCard({ items }) {
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
						<div className="products__info">
							<p className="product__name">{obj.name}</p>
							<div className="product__data">
								<p className="data__values">
									{`${obj.quantity} un -`}
									{ConvertToBrl(
										obj.price.price * Number(obj.quantity),
									)}
								</p>
								<p className="data__fees">
									{`Impostos: ${ConvertToBrl(
										obj.price.taxes,
									)} - Total: ${ConvertToBrl(
										obj.price.price * Number(obj.quantity) +
											obj.price.taxes,
									)}`}
								</p>
							</div>
						</div>
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
}
