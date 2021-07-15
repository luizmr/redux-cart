import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// material-ui/icons
import StorefrontIcon from '@material-ui/icons/Storefront';
import { FaBox, FaWhatsapp, FaPhone } from 'react-icons/fa';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

const MenuButton = styled.button`
	display: flex;
	justify-content: flex-start;
	gap: 20px;
	padding: 10px 15px;
	margin: 5px 0;
	background-color: ${(props) => {
		return props.selected ? '#f7f7ff' : 'transparent';
	}};
	border: none;
	align-items: center;
	transition: all 0.3s ease-in-out;

	svg,
	p {
		color: ${(props) => (props.selected ? '#2b76bf' : '#d8d8d8')};
		transition: all 0.3s ease-in-out;
		font-weight: 600;
		font-size: 0.9rem;
	}

	svg {
		font-size: 20px !important;
	}

	&:hover {
		cursor: pointer;
		background-color: #f7f7ff;
		border-radius: 20px 0 0 20px;
		svg,
		p {
			color: #2b76bf;
		}
	}
`;

const Content = () => {
	const history = useHistory();
	const MenuItems = [
		{
			category: 'Compras',
			itens: [
				{
					key: 'promocoes',
					icon: <WhatshotIcon />,
					title: 'Promoções',
					active: false,
					path: '/',
				},
				{
					key: 'produtos',
					icon: <FaBox />,
					title: 'Produtos',
					active: true,
					path: '/',
				},
				{
					key: 'pedidos',
					icon: <ReceiptOutlinedIcon />,
					title: 'Pedidos',
					active: false,
					path: '/',
				},
				{
					key: 'cupons',
					icon: <LocalOfferOutlinedIcon />,
					title: 'Cupons',
					active: false,
					path: '/',
				},
			],
		},
		{
			category: 'Ajuda',
			itens: [
				{
					key: 'Estabelecimentos',
					icon: <StorefrontIcon />,
					title: 'Estabelecimentos',
					active: false,
					path: '/',
				},
			],
		},
		{
			category: 'Ajuda',
			itens: [
				{
					key: 'whatsapp',
					icon: <FaWhatsapp />,
					title: 'Whatsapp',
					active: false,
					path: '/',
				},
				{
					key: 'contato',
					icon: <FaPhone />,
					title: 'Contato distribuidora',
					active: false,
					path: '/',
				},
			],
		},
	];

	return (
		<div className="content">
			{MenuItems.map((obj) => (
				<>
					<p className="content__title">{obj.category}</p>
					{obj.itens.map((el) => (
						<MenuButton
							onClick={() => {
								history.push(el.path);
							}}
							key={el.key}
							selected={el.active}
						>
							{el.icon}
							<p>{el.title}</p>
						</MenuButton>
					))}
				</>
			))}
		</div>
	);
};

export default Content;
