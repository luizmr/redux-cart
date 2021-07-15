import React from 'react';

// material-ui/icons
import { FaSearch } from 'react-icons/fa';

// components
import SelectFilter from '../../../components/SelectFilter/SelectFilter';
import { SearchBox } from '../styles/styles';

// utils
import selectOptions from './selectOptions';

export default function ProductFilter({
	handleChangeOrder,
	handleChangePageSize,
	handleSearchString,
	handleSearch,
	order,
	pageSize,
	searchString,
}) {
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
					options={selectOptions[0]}
					label="Ordernar por:"
					iconScale={1}
					handleChange={handleChangeOrder}
					value={order}
				/>
				<SelectFilter
					options={selectOptions[1]}
					label="Exibicação:"
					iconScale={1.6}
					handleChange={handleChangePageSize}
					value={pageSize}
				/>
			</div>
		</>
	);
}
