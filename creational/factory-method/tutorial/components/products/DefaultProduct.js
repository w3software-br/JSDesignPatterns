'strict'

const DefaultProduct = (function () {
  function DefaultProduct() {
    //...
  }

  DefaultProduct.prototype.getDescription = function () {
    console.log("Type Product Default");
  }

  return DefaultProduct;

})();

module.exports = DefaultProduct;