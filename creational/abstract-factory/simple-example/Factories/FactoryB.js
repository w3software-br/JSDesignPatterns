'strict'

const ModelB = require('./../Models/ModelB');

const FactoryB = (function () {
  
  function FactoryB() {
    this.instance = new ModelB('att1 for ModelB', 'att2 for ModelB');
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