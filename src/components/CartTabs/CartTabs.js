import React from 'react';

// material-ui/icons
import { Button } from '@material-ui/core';

export default function CartTabs({ tabArray, activeArray, handleChangeTab }) {
	return (
		<div className="cart__tabs">
			{tabArray.map((obj) => (
				<Button
					onClick={() => handleChangeTab(obj.id)}
					className={activeArray[obj.id] ? 'button-active' : ''}
					key={obj.id}
				>
					{obj.label}
				</Button>
			))}
		</div>
	);
}
