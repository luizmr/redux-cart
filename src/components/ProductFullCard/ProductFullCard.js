import React, { useEffect, useState, memo } from 'react';

// material-ui/icons
import { FaBarcode, FaMobileAlt, FaWarehouse } from 'react-icons/fa';
import { FiTrash, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { IconButton } from '@material-ui/core';

// utils
import ConvertToBrl from '../../utils/convertToBrl';
import { connect } from 'react-redux';
import {
	addToCart,
	removeAllFromCart,
	removeFromCart,
} from '../../store/ShoppingCart/cart-actions';

const ProductFullCard = memo(({ obj, cart, addToCart, removeFromCart }) => {
	const [product, setProduct] = useState({
		quantity: '',
	});

	useEffect(() => {
		if (cart.length) {
			const productFound = cart.find((el) => el.cod === obj.cod);
			if (productFound) {
				setProduct(productFound);
			}
		}
	}, []);

	useEffect(() => {
		if (cart.length === 0) {
			setProduct({ ...product, quantity: 0 });
		}
	}, [cart]);

	const handleDispatchAdd = (element, quantity) => {
		addToCart({
			...element,
			quantity,
		});

		setProduct({ ...element, quantity });
	};

	const handleDisptachRemove = (element, quantity) => {
		removeFromCart({
			...element,
			quantity,
		});
		setProduct({ ...element, quantity });
	};

	const handlePlus = () => {
		if (product.quantity === '0' || product.quantity === '') {
			handleDispatchAdd(obj, Number(product.quantity) + 1);
		} else if (Number(product.quantity) + 1 > obj.quantityAvailable) {
			handleDispatchAdd(product, obj.quantityAvailable);
		} else {
			handleDispatchAdd(product, Number(product.quantity) + 1);
		}
	};

	const handleMinus = () => {
		if (Number(product.quantity) <= 0 || product.quantity === '') {
			handleDisptachRemove(obj, 0);
		} else {
			if (product.quantity === '1') {
				handleDisptachRemove(product, 0);
			}
			handleDisptachRemove(product, Number(product.quantity) - 1);
		}
	};

	const handleProductQuantityChange = (value) => {
		setProduct({
			...product,
			quantity: value < 0 || `${value}` === '-' ? `` : `${value}`,
		});
	};

	const handleConfirmProductQuantity = () => {
		if (Number(product.quantity) > obj.quantityAvailable) {
			if (Object.keys(product).length > 1) {
				handleDispatchAdd(product, obj.quantityAvailable);
			} else {
				handleDispatchAdd(obj, obj.quantityAvailable);
			}
		} else if (Number(product.quantity) === 0) {
			if (Object.keys(product).length > 1) {
				handleDisptachRemove(product, 0);
			} else {
				handleDisptachRemove(obj, 0);
			}
		} else {
			if (Object.keys(product).length > 1) {
				handleDispatchAdd(product, Number(product.quantity));
			}
			handleDispatchAdd(obj, Number(product.quantity));
		}
	};

	const handleDeleteItem = () => {
		handleDisptachRemove(product, 0);
	};

	return (
		<div className="product__card">
			<div className="card__header">
				<div className="header__info">
					<div className="header__chip">{obj.cod}</div>
					<p>{obj.name}</p>
				</div>
				<div className="header__icons">
					<FaBarcode />
					<InfoOutlinedIcon />
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
							<div className="detail__quantity">
								<p className="detail__title">Quantidade (un)</p>
								<div className="quantity__content">
									<IconButton
										className={
											Number(product.quantity) >= 1
												? 'minus__active'
												: ''
										}
										onClick={handleMinus}
										disabled={
											!product.quantity ||
											product.quantity === 0
										}
									>
										<FiMinusCircle />
									</IconButton>
									<div>
										<input
											min="0"
											max={`${obj.quantityAvailable}`}
											type="number"
											value={
												product ? product.quantity : 0
											}
											onChange={(e) => {
												if (
													e.target.value <=
													obj.quantityAvailable
												) {
													handleProductQuantityChange(
														e.target.value,
													);
												}
											}}
											onBlur={() => {
												handleConfirmProductQuantity();
											}}
										/>
										<span
											style={
												product.quantity !== '0'
													? { display: 'block' }
													: { display: 'none' }
											}
										>
											un
										</span>
									</div>
									<IconButton
										className={
											Number(product.quantity) <
											obj.quantityAvailable
												? 'plus__active'
												: ''
										}
										onClick={handlePlus}
									>
										<FiPlusCircle />
									</IconButton>
								</div>
							</div>
							<div className="detail__value">
								<p className="detail__title">Valor</p>
								<div className="base__content">
									<span>
										{Number(product.quantity) > 0
											? ConvertToBrl(
													obj.price.price *
														Number(
															product.quantity,
														),
											  )
											: ConvertToBrl(0)}
									</span>
								</div>
							</div>
						</div>
						<div className="info__trash">
							{Number(product.quantity) > 0 && (
								<IconButton onClick={handleDeleteItem}>
									<FiTrash />
								</IconButton>
							)}
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

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps, {
	addToCart,
	removeFromCart,
})(ProductFullCard);
