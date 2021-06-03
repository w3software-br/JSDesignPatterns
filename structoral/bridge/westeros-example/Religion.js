'strict'

const OldGodAdapter = require('./Adapters/OldGodsAdapter');
const DrownedGodAdapter = require('./Adapters/DrownedGodAdapter')

const Religion = (function () {

  function Religion() {
    //...
  }

  Religion.prototype.OldGoodAdapter = function () {
    return new OldGodAdapter();
  }

  Religion.prototype.DrownedGodAdapter = function () {
    return new DrownedGodAdapter();
  }

  return Religion;
  
})();

module.exports = Religion;