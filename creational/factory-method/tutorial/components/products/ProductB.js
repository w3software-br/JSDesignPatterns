'strict'

const ProductB = (function () {
  function ProductB() {
    //...
  }

  ProductB.prototype.getDescription = function () {
    console.log("Type Product A");
  }

  return ProductB;

})();

module.exports = ProductB;