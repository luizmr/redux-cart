import { IconButton } from '@material-ui/core';
import React from 'react';
import { FiTrash } from 'react-icons/fi';

// utils
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/ShoppingCart/cart-actions';

const TrashComponent = ({ product, removeFromCart, setProduct }) => {
	const handleDisptachRemove = (element, quantity) => {
		removeFromCart({
			...element,
			quantity,
		});
		setProduct({ ...element, quantity });
	};

	const handleDeleteItem = () => {
		handleDisptachRemove(product, 0);
	};

	return (
		<div className="info__trash">
			{Number(product.quantity) > 0 && (
				<IconButton onClick={handleDeleteItem}>
					<FiTrash />
				</IconButton>
			)}
		</div>
	);
};

export default connect(null, {
	removeFromCart,
})(TrashComponent);
