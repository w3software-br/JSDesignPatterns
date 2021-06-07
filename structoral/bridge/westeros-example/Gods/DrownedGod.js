'strict'

const DrownedGod = (function () {

  function DrownedGod() {
    this.sacrifice = null;
  }

  DrownedGod.prototype.prayTo = function (humanSacrifice) {
    this.sacrifice = humanSacrifice;
    console.log("Yeahh. We are bad, very bad :-)."
    +" Thank you for the human sacrifice: " + this.sacrifice.getDescription() + "\n");
  }

  return DrownedGod;

})();

module.exports = DrownedGod;