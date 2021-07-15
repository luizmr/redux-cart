import React from 'react';

// components
import ProductsCard from '../../../components/ProductsCard/ProductsCard';
import ClientCard from '../../../components/ClientCard/ClientCard';
import TotalCard from '../../../components/TotalCard/TotalCard';

const TabSummary = ({ items, activeArray }) => {
	return (
		<div className="cart__summary">
			<div className="summary">
				{(activeArray[0] || activeArray[1]) && (
					<ProductsCard items={items} />
				)}
				{activeArray[0] && <ClientCard />}
			</div>
			{activeArray[0] && (
				<div className="total">
					<TotalCard />
				</div>
			)}
		</div>
	);
};

export default TabSummary;
