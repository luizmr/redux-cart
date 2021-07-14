import React, { memo } from 'react';

// material-ui/icons
import { FaMobileAlt, FaWarehouse } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IconButton } from '@material-ui/core';

// utils
import ConvertToBrl from '../../utils/convertToBrl';
import { Link } from 'react-router-dom';

const ProductSimpleCard = memo(({ obj }) => {
	return (
		<div className="product__card simple-card">
			<div className="card__header">
				<div className="header__info">
					<div className="header__chip">{obj.cod}</div>
					<p>{obj.name}</p>
				</div>
				<div className="header__icons">
					<IconButton>
						<Link to={`/product/${obj.cod}`}>
							<FiShoppingCart />
						</Link>
					</IconButton>
				</div>
			</div>
			<div className="card__content">
				<div className="content__img">
					<img src={obj.imageURL} alt={obj.name} />
				</div>
				<div className="content__info">
					<div className="product__main">
						<div className="product__details">
							<div className="detail__base">
								<p className="detail__title">Base</p>
								<div className="base__content">
									<p>Nosso preço</p>
									<span>{ConvertToBrl(obj.price.price)}</span>
								</div>
							</div>
							<div className="detail__storage">
								<p className="detail__title">Estoque</p>
								{obj.quantityAvailable >= 1 ? (
									<div className="storage__full">
										<FaWarehouse />
										<span>
											{`${obj.quantityAvailable} un`}
										</span>
									</div>
								) : (
									<div className="storage__empty">
										<FaMobileAlt />
										<div>
											<span>Sem estoque</span>
											<span>Avise-me</span>
										</div>
									</div>
								)}
							</div>
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
		</div>
	);
});

export default ProductSimpleCard;
