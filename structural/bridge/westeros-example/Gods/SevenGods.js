'strict'

const SevenGods = (function () {

  function SevenGods() { 
    //... 
  }

  SevenGods.prototype.prayTo = function (prayPurpose) {
    console.log(`
      Sorry there are a lot of us, it gets confusing
      here. Did you pray for something?: ${prayPurpose}
    `);
  }
})()