import React, { useEffect, useState } from 'react';

// material-ui/icons
import StorefrontIcon from '@material-ui/icons/Storefront';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { IconButton } from '@material-ui/core';
import FormatCnpj from '../../../utils/formatCnpj';

const Header = ({ client, isOpen, handleClick }) => {
	const [user, setUser] = useState({
		name: 'Carregando',
		cnpj: 'Carregando',
	});
	useEffect(() => {
		if (client) {
			setUser({ ...client, cnpj: FormatCnpj(client.cnpj) });
		}
	}, [client]);
	return (
		<div className="menu__header">
			<StorefrontIcon />
			<div className="header__info">
				<p>{user.name}</p>
				<p>{user.cnpj}</p>
			</div>
			<IconButton aria-label="notification" onClick={handleClick}>
				{isOpen ? <FaChevronLeft /> : <FaChevronRight />}
			</IconButton>
		</div>
	);
};

export default Header;
