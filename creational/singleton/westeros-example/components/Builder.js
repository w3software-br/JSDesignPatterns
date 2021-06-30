'strict'

const Wall = require('./Wall');

const Builder = (function () {

  function Builder() {
    this.wall = null;
  }

  Builder.prototype.getWall = function () {

    if(!this.wall) {
      this.wall = new Wall();
    }
    return this.wall;
  }

  return Builder;

})();

module.exports = Builder;