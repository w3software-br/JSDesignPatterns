'strict'

const Wall = (function () {

  function Wall() {
    //...
  }
  
  Wall.prototype.setHeight = function (height) {
    this.height = height;
  } 

  Wall.prototype.getStatus = function () {
    console.log("The memory addess of the instance is: " + this);
  }

  return Wall;

})();

module.exports = Wall;