import { makeStyles } from '@material-ui/core';

const useOrderByClass = makeStyles({
	root: {
		'& .MuiOutlinedInput-input': {
			fontFamily: 'Open Sans !important',
			color: '#004374',
			fontWeight: 600,
			fontSize: '0.8rem',
			backgroundColor: '#fff',
			borderRadius: 20,
			padding: '10px 0 10px 10px !important',
			marginTop: '2px',
		},
		'& .MuiInputLabel-root': {
			color: '#0D47A1',
			fontWeight: 600,
		},
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: 'none !important',
		},
		'&:hover .MuiOutlinedInput-input': {
			color: '#004374',
		},
		'&:hover .MuiInputLabel-root': {
			color: '#004374',
			fontWeight: 600,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
			color: '#004374',
			backgroundColor: '#F9FAFB',
		},
		'& .MuiInputLabel-root.Mui-focused': {
			color: '#004374',
			fontWeight: 600,
		},
	},
});

export default useOrderByClass;
