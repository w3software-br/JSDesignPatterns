'strict'

const Gods = require('./Gods');

const GodFactory = (function () {

  function GodFactory() {
    //...
  }

  GodFactory.prototype.build = function (godName) {
    switch(godName) {
      case 'watery':
        return new Gods.WateryGod();
        break;
      
        case 'ancient':
          return new Gods.AncientGods()
          break;
        
        default:
          return new Gods.DefaultGod()
          break; 
    }
  }

  return GodFactory;

})();

module.exports = GodFactory;