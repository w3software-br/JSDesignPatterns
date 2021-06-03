'strict'

const OldGod = (function () {

  function OldGod() {
    this.sacrifice = null;
  }

  OldGod.prototype.prayTo = function (sacrifice) {
    this.sacrifice = sacrifice;
    console.log(`We Old Gods hear your pray. Thank you for "${sacrifice.getDescription()}"`);
  }

  return OldGod;

})();

module.exports = OldGod;