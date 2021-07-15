const ReducePrice = (cart, both = false) => {
	const priceArray = [];
	const taxArray = [];
	cart.forEach((obj) => {
		if (obj.price) {
			const price = obj.price.price * obj.quantity;
			priceArray.push(price);
			taxArray.push(obj.price.taxes);
		}
	});
	const priceReduced = priceArray.reduce((acc, curr) => acc + curr, 0);

	const taxReduced = taxArray.reduce((acc, curr) => acc + curr, 0);

	if (both) {
		return [priceReduced, taxReduced];
	} else {
		return priceReduced;
	}
};

export default ReducePrice;
