'strict'

const Product = (function () {
  function Product(arg1, arg2, arg3) {
    this.att1 = arg1, this.att2 = arg2; this.att3 = arg3;
  }

	Product.prototype.getProductType = function () {
		if(this.att1 === 'a'
			&& this.att2 === 'b'
			&& this.att3 === 'c') {
			return "This is a Product type 1";
		} else if(this.att1 === 'd'
			&& this.att2 === 'e'
			&& this.att3 === 'f') {
			return "This is a Product type 2";
		} else if(this.att1 === 'g'
			&& this.att2 === 'h'
			&& this.att3 === 'i') {
			return "This is a Product type 3";
		}
	}

  return Product;

})();

module.exports = Product;