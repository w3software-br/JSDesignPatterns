'strict'

const OldGod = require("../Gods/OldGods");
const Sacrifice = require('./../Sacrifice');

const OldGodsAdapter = (function () {

  function OldGodAdapter() {
    this.oldGod = new OldGod();
  }

  OldGodAdapter.prototype.prayTo = function () {
    this.oldGod.prayTo(new Sacrifice("Sacrifice to Old Gods"));
  }

  return OldGodAdapter;

})();

module.exports = OldGodsAdapter;