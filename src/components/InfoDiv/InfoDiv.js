import React from 'react';
import InfoDivStyled from './styles';

export default function InfoDiv({ title, info, spanClass, subtitle }) {
	return (
		<InfoDivStyled>
			<p>
				{title}
				{subtitle && (
					<>
						<br />
						{subtitle}
					</>
				)}
			</p>
			<span className={`${spanClass}`}>{info}</span>
		</InfoDivStyled>
	);
}
