'strict'
const ProductA = require('./products/ProductA');
const ProductB = require('./products/ProductB');
const DefaultProduct = require('./products/DefaultProduct');

const Factory = (function () {
  function Factory() {
    //...
  }

  Factory.prototype.build = function(type) {
    if (type === 1) {
      return new ProductA();
    } else if(type === 2) {
      return new ProductB();
    } else {
      return new DefaultProduct();
    }
  }

  return Factory;

})();

module.exports = Factory;