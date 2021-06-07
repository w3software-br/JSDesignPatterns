'strict'

const PrayerPurposeProvider = (function () {

  function PrayerPurposeProvider(description) {
    console.log("Creating prayer porpuse provider")
    this.description = description;
  }

  PrayerPurposeProvider.prototype.getDescription = function () {
    return this.description;
  }

  return PrayerPurposeProvider;

})();

module.exports = PrayerPurposeProvider;