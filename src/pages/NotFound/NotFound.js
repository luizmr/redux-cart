import React from 'react';
import CartButtons from '../../components/CartButtons/CartButtons';

const NotFound = () => {
	return (
		<div className="products">
			<div className="products__page">
				<CartButtons cart={[]} toPayment={false} />
				<div className="products__pageContent">
					<div className="products__cards">
						<div className="not-found">
							<p>Página não encontrada.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
