'strict'

const SevenGods = (function () {

  function SevenGods() { 
    this.prayPurpose; 
  }

  SevenGods.prototype.prayTo = function (prayPurpose) {
    console.log(prayPurpose);

    // this.prayPurpose = prayPurpose;
    // console.log(`
    //   Sorry there are a lot of us, it gets confusing
    //   here. Did you pray for something?: ${this.prayPurpose.getDescription()}
    // ` + "\n");

  }

  SevenGods.prototype.test = function () {
    
  }

  return SevenGods;

})();

module.exports = SevenGods;