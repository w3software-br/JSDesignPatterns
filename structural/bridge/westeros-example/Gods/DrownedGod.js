'strict'

const DrownedGod = (function () {

  function DrownedGod() {
    //...
  }

  DrownedGod.prototype.prayTo = function (humanSacrifice) {
    console.log("Yeahh. We are bad, very bad :-)."
    +" Thank you for the human sacrifice: " + humanSacrifice);
  }

})();

module.exports = DrownedGod;