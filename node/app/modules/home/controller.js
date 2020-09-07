const products = require('../products/model');
exports.index = async (req, res) => {
	const items = await products.get();
	res.send('Hi');
};
