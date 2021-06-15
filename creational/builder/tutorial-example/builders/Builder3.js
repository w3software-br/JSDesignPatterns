'strict'
const Product = require('./../models/Product');

const Builder3 = (function () {
	function Builder3() {
		this.product = new Product('g', 'h', 'i');
	}

	Builder3.prototype.getProductType = function () {
		console.log(this.product.getProductType());
	}

	return Builder3;

})();

module.exports = Builder3;