'strict'

const GodFactory = require('./GodFactory');

const Prayer = (function () {

  function Prayer() {
    //...
  }

  Prayer.prototype.pray = function (godName) {
    let godFactory = new GodFactory();
    return godFactory.build(godName);
  }

  return Prayer;

})();

module.exports = Prayer;