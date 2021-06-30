'strict'

const ProductB = (function () {
  function ProductB(att1, att2) {
    this.attA1 = att1;
    this.attA2 = att2;
  }

  ProductB.prototype.getType = function () {
    console.log(`This is a ProductB class. atts: ${this.attA1}, ${this.attA2}`);
  }

  return ProductB;

})();

module.exports = ProductB;