import React from 'react';

// material-ui/icons
import { FaSearch } from 'react-icons/fa';

// components
import SelectFilter from '../../../components/SelectFilter/SelectFilter';
import { SearchBox } from '../styles/styles';

export default function ProductFilter({
	handleChangeOrder,
	handleChangePageSize,
	handleSearchString,
	handleSearch,
	order,
	pageSize,
	searchString,
}) {
	const options = [
		[
			{
				value: '1',
				label: 'Nome (A-Z)',
			},
			{
				value: '2',
				label: 'Nome (Z-A)',
			},
		],
		[
			{
				value: '2',
				label: '2',
			},
			{
				value: '4',
				label: '4',
			},
			{
				value: '6',
				label: '6',
			},
		],
	];
	return (
		<>
			<SearchBox>
				<FaSearch onClick={() => handleSearch()} />
				<div className="filter__search">
					<input
						type="text"
						placeholder="Pesquisar"
						onChange={(e) => handleSearchString(e.target.value)}
						value={searchString}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								handleSearch();
							}
						}}
						onkey
					/>
				</div>
			</SearchBox>
			<div className="products__pageOrdenation">
				<SelectFilter
					options={options[0]}
					label="Ordernar por:"
					iconScale={1}
					handleChange={handleChangeOrder}
					value={order}
				/>
				<SelectFilter
					options={options[1]}
					label="Exibicação:"
					iconScale={1.6}
					handleChange={handleChangePageSize}
					value={pageSize}
				/>
			</div>
		</>
	);
}
