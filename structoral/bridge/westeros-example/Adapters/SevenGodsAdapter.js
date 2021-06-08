'strict'
const SevenGods =  require('./../Gods/SevenGods');
const PrayerPurposeProvider = require('./../PrayerPurposeProvider');

const SevenGodsAdapter = (function () {

  function SevenGodsAdapter() {
    this.sevenGods = new SevenGods();
  }

  SevenGodsAdapter.prototype.prayTo = function () {
    return this.sevenGods.prayTo(new PrayerPurposeProvider("This is a pray propurse to one of seven gods"));
  }

  return SevenGodsAdapter;

})();

module.exports =  SevenGodsAdapter;