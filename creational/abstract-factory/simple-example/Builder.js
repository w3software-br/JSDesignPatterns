'strict'

const Builder = (function () {
  
  function Builder(factory) {
    this.factory = factory;
  }

  Builder.prototype.getInstance = function () {
    return this.factory.getInstance();
  }

  return Builder;

})();

module.exports = Builder;