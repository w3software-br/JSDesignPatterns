'strict'
const DrownedGod = require('./../Gods/DrownedGod')
const Sacrifice = require('./../Sacrifice');

const DrownedGodAdapter = (function () {

  function DrownedGodAdapter() {
    this.drownedGod = new DrownedGod();
  }

  DrownedGodAdapter.prototype.prayTo = function() {
    this.drownedGod.prayTo(new Sacrifice("Human sacrifice to Drowned God"));
  }

  return DrownedGodAdapter;

})();

module.exports = DrownedGodAdapter;