'strict'

const ProductB = require('../Models/ProductB');

const FactoryB = (function () {
  
  function FactoryB() {
    this.instance = new ProductB('att1 for ProductB', 'att2 for ProductB');
  }

  FactoryB.prototype.getInstance = function () {
    return this.instance;
  }

  FactoryB.prototype.getType = function () {
    console.log(this.instance.getType());
  }

  return FactoryB;
  
})();

module.exports = FactoryB;