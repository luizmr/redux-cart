import React, { useEffect, useState } from 'react';

// material-ui/icons
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import ProductFilter from './components/ProductFilter';

// json
import ProductsData from '../../data/products.json';
import ProductsList from './components/ProductsList';

export default function Products() {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const [pagination, setPagination] = useState(0);
	const [page, setPage] = useState(1);
	const [order, setOrder] = useState('1');
	const [pageSize, setPageSize] = useState('2');
	const [searchString, setSearchString] = useState('');
	const [loading, setLoading] = useState(true);

	const handlePageSize = (value, data) => {
		const productLength = data.length;
		const numberOfPages = productLength / Number(value);
		setPagination(Math.ceil(numberOfPages));
	};

	useEffect(() => {
		handleSearch(pageSize, order, ProductsData);
	}, []);

	const handleChangePage = (event, value) => {
		setPage(value);
		const lastTernaryOption =
			value === 2 ? pageSize : pageSize * (value - 1);
		setFilteredProducts(
			products.slice(
				value === 1 ? 0 : lastTernaryOption,
				pageSize * value,
			),
		);
	};

	const filterByOrder = (value, data) => {
		if (value === '1') {
			return data.sort((a, b) => a.name.localeCompare(b.name));
		}
		return data.sort((a, b) => b.name.localeCompare(a.name));
	};

	const handleSearch = (p, o, d, s) => {
		setLoading(true);
		const productFilteredByString = d
			? s
				? ProductsData
				: d.filter((obj) => {
						return (
							obj.name.toLowerCase().indexOf(searchString) !== -1
						);
				  })
			: products.filter((obj) => {
					return obj.name.toLowerCase().indexOf(searchString) !== -1;
			  });

		const productFilteredByOrder = filterByOrder(
			o,
			productFilteredByString,
		);
		setProducts(productFilteredByOrder);
		const productFilteredByPageSize = productFilteredByOrder.slice(
			0,
			Number(p),
		);
		setTimeout(() => {
			setFilteredProducts(productFilteredByPageSize);
			handlePageSize(p, productFilteredByOrder);
			setPage(1);
			setLoading(false);
		}, 1500);
	};

	const handleChangeOrder = (e) => {
		const {
			target: { value },
		} = e;
		setOrder(value);
		handleSearch(pageSize, value);
	};

	const handleChangePageSize = (e) => {
		const {
			target: { value },
		} = e;
		setPageSize(value);
		handleSearch(value, order);
	};

	const handleSearchString = (value) => {
		setSearchString(value);
		if (value === '') {
			setProducts(ProductsData);
			handleSearch(pageSize, order, ProductsData, true);
		}
	};

	const ProductsContent = () => {
		return (
			<>
				{loading ? (
					<div className="products__loading">
						<CircularProgress />
					</div>
				) : (
					<ProductsList
						filteredProducts={filteredProducts}
						page={page}
						pagination={pagination}
						handleChangePage={handleChangePage}
					/>
				)}
			</>
		);
	};

	return (
		<div className="products">
			<div className="products__page">
				<div className="products__pageFilter">
					<ProductFilter
						handleChangeOrder={handleChangeOrder}
						order={order}
						handleChangePageSize={handleChangePageSize}
						pageSize={pageSize}
						handleSearchString={handleSearchString}
						searchString={searchString}
						handleSearch={() => handleSearch(pageSize, order)}
					/>
				</div>
				<ProductsContent />
			</div>
		</div>
	);
}
