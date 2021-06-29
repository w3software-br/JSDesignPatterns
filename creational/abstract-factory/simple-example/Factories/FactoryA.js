'strict'

const ModelA = require('./../Models/ModelA');

const FactoryA = (function () {
  
  function FactoryA() {
    this.instance = new ModelA('att1 for ModelA', 'att2 for ModelA');
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