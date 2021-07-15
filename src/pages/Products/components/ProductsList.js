import React from 'react';

// material-ui/icons
import Pagination from '@material-ui/lab/Pagination';

// components
import ProductSimpleCard from '../../../components/ProductSimpleCard/ProductSimpleCard';

const ProductsList = ({
	filteredProducts,
	pagination,
	page,
	handleChangePage,
}) => {
	return (
		<>
			<div className="products__pageContent">
				<div className="products__cards">
					{filteredProducts.length ? (
						<>
							{filteredProducts.map((obj) => (
								<ProductSimpleCard obj={obj} key={obj.cod} />
							))}
						</>
					) : (
						<div className="not-found">
							<p>
								Resultado não encontrado para a busca desejada!
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="products__pagination">
				<Pagination
					count={pagination}
					page={page}
					onChange={handleChangePage}
					style={
						filteredProducts.length
							? { display: 'block' }
							: { display: 'none' }
					}
				/>
			</div>
		</>
	);
};

export default ProductsList;
