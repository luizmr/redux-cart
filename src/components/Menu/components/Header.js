import React from 'react';

// material-ui/icons
import StorefrontIcon from '@material-ui/icons/Storefront';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { IconButton } from '@material-ui/core';

export default function Header({ client, isOpen, handleClick }) {
	return (
		<div className="menu__header">
			<StorefrontIcon />
			<div className="header__info">
				<p>{client ? client.name : 'Carregando'}</p>
				<p>
					{client
						? client.cnpj.replace(
								/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
								'$1.$2.$3/$4-$5',
						  )
						: 'Carregando'}
				</p>
			</div>
			<IconButton aria-label="notification" onClick={handleClick}>
				{isOpen ? <FaChevronLeft /> : <FaChevronRight />}
			</IconButton>
		</div>
	);
}
