import React from 'react';

// material-ui/icons
import StorefrontIcon from '@material-ui/icons/Storefront';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { IconButton } from '@material-ui/core';
import FormatCnpj from '../../../utils/formatCnpj';

const Header = ({ client, isOpen, handleClick }) => {
	return (
		<div className="menu__header">
			<StorefrontIcon />
			<div className="header__info">
				<p>{client ? client.name : 'Carregando'}</p>
				<p>{client ? FormatCnpj(client.cnpj) : 'Carregando'}</p>
			</div>
			<IconButton aria-label="notification" onClick={handleClick}>
				{isOpen ? <FaChevronLeft /> : <FaChevronRight />}
			</IconButton>
		</div>
	);
};

export default Header;
