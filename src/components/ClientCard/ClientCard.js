import React, { useEffect, useState } from 'react';

// material-ui/icons
import { Button } from '@material-ui/core';

// components
import InfoDiv from '../InfoDiv/InfoDiv';

// utils
import FormatCnpj from '../../utils/formatCnpj';

const ClientCard = () => {
	const [client, setClient] = useState({
		name: 'Indefindo',
		cnpj: FormatCnpj('00000000000000'),
	});

	useEffect(() => {
		if (localStorage.getItem('client')) {
			setClient({
				name: JSON.parse(localStorage.getItem('client')).name,
				cnpj: FormatCnpj(
					JSON.parse(localStorage.getItem('client')).cnpj,
				),
			});
		}
	}, [localStorage.getItem('client')]);

	return (
		<div className="summary__client">
			<div className="client__header">
				<p>Cliente</p>
				<Button className="header__button">
					<p>Ver detalhes</p>
				</Button>
			</div>
			<div className="client__info">
				<InfoDiv title="ID" info="94028" spanClass="id__chip" />
				<div className="client__cnpj">
					<InfoDiv
						title="Razão Social"
						info={`${client.name}`}
						spanClass="info__string"
					/>
					<InfoDiv
						title="CNPJ"
						info={`${client.cnpj}`}
						spanClass="info__string"
					/>
				</div>
			</div>
		</div>
	);
};

export default ClientCard;
