'use strict'

const Wall = (function () {

  function Wall() {
    this.height = null;
  }
  
  Wall.prototype.setHeight = function (height) {
    this.height = height;
  } 

  Wall.prototype.getHeight = function () {
    return this.height;
  }

  return Wall;

})();

module.exports = Wall;