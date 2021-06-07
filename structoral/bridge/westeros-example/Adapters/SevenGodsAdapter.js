'strict'
const SevenGods =  require('./../Gods/SevenGods');
const PrayerPurposeProvider = require('./../PrayerPurposeProvider');

const SevenGodsAdapter = (function () {

  function SevenGodsAdapter() {
    // console.log(PrayerPurposeProvider);
  }

  SevenGodsAdapter.prototype.prayTo = function () {
    return new SevenGods(new PrayerPurposeProvider("This is a pray propurse to one of seven gods"));
  }

  return SevenGodsAdapter;

})();

module.exports =  SevenGodsAdapter;