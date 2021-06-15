'strict'
const Product = require('./../models/Product');

const Builder2 = (function () {
	function Builder2() {
		this.product = new Product('d', 'e', 'f');
	}

	Builder2.prototype.getProductType = function () {
		console.log(this.product.getProductType());
	}

	return Builder2;

})();

module.exports = Builder2;