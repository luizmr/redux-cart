import React from 'react';

// material-ui/icons
import { Button } from '@material-ui/core';

// components
import InfoDiv from '../InfoDiv/InfoDiv';

export default function ClientCard() {
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
						info="FARMACIA DA ILHA"
						spanClass="info__string"
					/>
					<InfoDiv
						title="CNPJ"
						info={`${'12312312312312'.replace(
							/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
							'$1.$2.$3/$4-$5',
						)}`}
						spanClass="info__string"
					/>
				</div>
			</div>
		</div>
	);
}
