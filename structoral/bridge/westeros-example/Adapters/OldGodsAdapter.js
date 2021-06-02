'strict'

const OldGod = require("../Gods/OldGods");
const Scrifice = require('./../Scrifice');

const OldGodAdapter = (function () {

  function OldGodAdapter() {
    this.oldGod = new OldGod();
  }

  OldGodAdapter.prototype.prayTo = function () {
    this.oldGod.prayTo(new Sacrifice("My sacrifice to a Old God"));
  }

  return OldGodAdapter;

})()