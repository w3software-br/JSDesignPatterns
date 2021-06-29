'strict'

const ModelB = (function () {
  function ModelB(att1, att2) {
    this.attA1 = att1;
    this.attA2 = att2;
  }

  ModelB.prototype.getType = function () {
    console.log(`This is a ModelB class. atts: ${this.attA1}, ${this.attA2}`);
  }

  return ModelB;

})();

module.exports = ModelB;