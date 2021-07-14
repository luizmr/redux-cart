import React from 'react';

// components
import SideFilterOption from '../SideFilterOption/SideFilterOption';

export default function SideMenu({ handleChangeSideFilter, sideFilter }) {
	const sideMenuOptions = [
		{
			title: 'Ações comerciais',
			key: 'acoes',
			options: [
				{
					key: 'promocao',
					label: 'Em promoção',
					active: sideFilter.promocao,
				},
				{
					key: 'oferta',
					label: 'Em oferta',
					active: sideFilter.oferta,
				},
			],
		},
		{
			title: 'Estoque',
			key: 'estoque',
			options: [
				{
					key: 'estoque',
					label: 'Estoque disponível',
					active: sideFilter.estoque,
				},
			],
		},
		{
			title: 'Categorias',
			key: 'categorias',
			options: [
				{
					key: 'genericos',
					label: 'Genéricos',
					active: false,
				},
				{
					key: 'similares',
					label: 'Similares',
					active: true,
				},
				{
					key: 'psicotropicos',
					label: 'Psicotrópicos',
					active: false,
				},
				{
					key: 'beleza',
					label: 'Higiene e beleza',
					active: false,
				},
			],
		},
	];
	return (
		<>
			{sideMenuOptions.map((obj) => (
				<SideFilterOption
					obj={obj}
					handleChangeSideFilter={handleChangeSideFilter}
				/>
			))}
		</>
	);
}
