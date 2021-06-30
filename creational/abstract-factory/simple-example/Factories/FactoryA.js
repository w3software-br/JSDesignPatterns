'strict'

const ProductA = require('../Models/ProductA');

const FactoryA = (function () {
  
  function FactoryA() {
    this.instance = new ProductA('att1 for ProductA', 'att2 for ProductA');
  }

  FactoryA.prototype.getInstance = function () {
    return this.instance;
  }

  FactoryA.prototype.getType = function () {
    console.log(this.instance.getType());
  }

  return FactoryA;
  
})();

module.exports = FactoryA;