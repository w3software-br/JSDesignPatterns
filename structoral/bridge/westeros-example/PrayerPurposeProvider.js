'strict'

const PrayerPurposeProvider = (function () {

  function PrayerPurposeProvider(description) {
    this.description = description;
  }

  PrayerPurposeProvider.prototype.getDescription = function () {
    return this.description;
  }

  return PrayerPurposeProvider;

})();

module.exports = PrayerPurposeProvider;