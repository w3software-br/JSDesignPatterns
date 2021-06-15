'strict'
const Product = require('./../models/Product');

const Builder1 = (function () {
	function Builder1() {
		this.product = new Product('a', 'b', 'c');
	}

	Builder1.prototype.getProductType = function () {
		console.log(this.product.getProductType());
	}

	return Builder1;

})();

module.exports = Builder1;