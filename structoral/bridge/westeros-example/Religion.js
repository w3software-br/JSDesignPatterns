'strict'

const OldGod = require("./Gods/OldGods")

const Religion = (function () {

  function Religion() {
    //...
  }

  Religion.prototype.OldGoodAdapter = function () {
    return new OldGod();
  }

  
})()