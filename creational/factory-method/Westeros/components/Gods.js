'strict'

const WateryGod = (function () {

  function WateryGod() {
    //...
  }

  WateryGod.prototype.prayTo = function () {
    console.log("Praying to WateryGod");
  }

  return WateryGod;

})();

const AncientGods = (function () {

  function AncientGods() {
    //...
  }

  AncientGods.prototype.prayTo = function () {
    console.log("Praying to AncientGods");
  }

  return AncientGods;

})();

const DefaultGod = (function () {
  
  function DefaultGod() {
    //...
  }

  DefaultGod.prototype.prayTo = function () {
    console.log("Praying to DefaultGod");
  }

  return DefaultGod;

})();

module.exports.WateryGod = WateryGod
module.exports.AncientGods = AncientGods
module.exports.DefaultGod = DefaultGod