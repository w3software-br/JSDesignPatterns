'strict'

const ProductA = (function () {
  function ProductA() {
    //...
  }

  ProductA.prototype.getDescription = function () {
    console.log("Type Product A");
  }

  return ProductA;

})();

module.exports = ProductA;