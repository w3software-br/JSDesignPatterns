'strict'

const ProductA = (function () {
  function ProductA(att1, att2) {
    this.attA1 = att1;
    this.attA2 = att2;
  }

  ProductA.prototype.getType = function () {
    console.log(`This is a ProductA class. atts: ${this.attA1}, ${this.attA2}`);
  }

  return ProductA;

})();

module.exports = ProductA;