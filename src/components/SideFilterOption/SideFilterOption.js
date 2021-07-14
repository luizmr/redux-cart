import React from 'react';

// material-ui/icons
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function SideFilterOption({ obj, handleChangeSideFilter }) {
	return (
		<div className="filter__topic justify-column-start">
			<p className="topic__title">{obj.title}</p>
			<div className="topic__checkboxes justify-column-start">
				{obj.options.map((el) => (
					<FormControlLabel
						control={
							<Checkbox
								checked={el.active}
								onChange={() => {
									handleChangeSideFilter(el.key);
								}}
								name={`${el.key}`}
							/>
						}
						key={el.key}
						label={`${el.label}`}
					/>
				))}
			</div>
		</div>
	);
}
