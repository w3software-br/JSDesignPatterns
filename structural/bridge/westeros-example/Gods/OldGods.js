'strict'

const OldGod = (function () {

  function OldGod() {
    //...
  }

  OldGod.prototype.prayTo = function (sacrifice) {
    console.log(`We Old Gods hear your pray. Thank you for ${sacrifice.getDescription()}`);
  }

  return OldGod;

})();

module.exports = OldGod;