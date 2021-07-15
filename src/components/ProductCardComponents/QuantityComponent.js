import React from 'react';

// material-ui/icons
import { IconButton } from '@material-ui/core';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

// utils
import { connect } from 'react-redux';
import {
	addToCart,
	removeFromCart,
} from '../../store/ShoppingCart/cart-actions';

const QuantityComponent = ({
	product,
	setProduct,
	obj,
	addToCart,
	removeFromCart,
}) => {
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
		const quantityInNumber = Number(product.quantity);
		if (product.quantity === 0 || product.quantity === '') {
			handleDispatchAdd(obj, quantityInNumber + 1);
		} else if (quantityInNumber + 1 > obj.quantityAvailable) {
			handleDispatchAdd(product, obj.quantityAvailable);
		} else {
			handleDispatchAdd(product, quantityInNumber + 1);
		}
	};

	const handleMinus = () => {
		const quantityInNumber = Number(product.quantity);
		if (quantityInNumber <= 0 || product.quantity === '') {
			handleDisptachRemove(obj, 0);
		} else {
			if (product.quantity === '1') {
				handleDisptachRemove(product, 0);
			}
			handleDisptachRemove(product, quantityInNumber - 1);
		}
	};

	const handleConfirmProductQuantity = () => {
		const quantityInNumber = Number(product.quantity);
		if (quantityInNumber > obj.quantityAvailable) {
			if (Object.keys(product).length > 1) {
				handleDispatchAdd(product, obj.quantityAvailable);
			} else {
				handleDispatchAdd(obj, obj.quantityAvailable);
			}
		} else if (quantityInNumber === 0) {
			if (Object.keys(product).length > 1) {
				handleDisptachRemove(product, 0);
			} else {
				handleDisptachRemove(obj, 0);
			}
		} else {
			if (Object.keys(product).length > 1) {
				handleDispatchAdd(product, quantityInNumber);
			}
			handleDispatchAdd(obj, quantityInNumber);
		}
	};

	const handleInputValueChange = (e) => {
		if (e.target.value <= obj.quantityAvailable) {
			handleProductQuantityChange(e.target.value);
		}
	};

	const handleProductQuantityChange = (value) => {
		setProduct({
			...product,
			quantity: value < 0 || `${value}` === '-' ? `` : `${value}`,
		});
	};

	return (
		<div className="detail__quantity">
			<p className="detail__title">Quantidade (un)</p>
			<div className="quantity__content">
				<IconButton
					className={
						Number(product.quantity) >= 1 ? 'minus__active' : ''
					}
					onClick={handleMinus}
					disabled={!product.quantity || product.quantity === 0}
				>
					<FiMinusCircle />
				</IconButton>
				<div>
					<input
						min="0"
						max={`${obj.quantityAvailable}`}
						type="number"
						value={product ? product.quantity : 0}
						onChange={handleInputValueChange}
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
						Number(product.quantity) < obj.quantityAvailable
							? 'plus__active'
							: ''
					}
					onClick={handlePlus}
				>
					<FiPlusCircle />
				</IconButton>
			</div>
		</div>
	);
};

export default connect(null, {
	addToCart,
	removeFromCart,
})(QuantityComponent);
