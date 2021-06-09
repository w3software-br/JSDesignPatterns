'strict'

const OldGodAdapter = require('./Adapters/OldGodsAdapter');
const DrownedGodAdapter = require('./Adapters/DrownedGodAdapter')
const SevenGodsAdapter = require('./Adapters/SevenGodsAdapter');

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

  Religion.prototype.SevenGodsAdapter = function () {
    return new SevenGodsAdapter();
  }

  return Religion;
  
})();

module.exports = Religion;