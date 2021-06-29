'strict'

const ModelA = (function () {
  function ModelA(att1, att2) {
    this.attA1 = att1;
    this.attA2 = att2;
  }

  ModelA.prototype.getType = function () {
    console.log(`This is a ModelA class. atts: ${this.attA1}, ${this.attA2}`);
  }

  return ModelA;

})();

module.exports = ModelA;