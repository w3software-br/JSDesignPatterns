'strict'

const Scrifice = (function () {

  function Sacrifice(description) {
    this.description = description;
  }

  Sacrifice.prototype.getDescription = function (description) {
    return this.description;
  }

  return Sacrifice;

})();

module.exports = Sacrifice;