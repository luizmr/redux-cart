const ConvertToBrl = (value) => {
	return value.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};

export default ConvertToBrl;
