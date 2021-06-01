'strict'

let Westeros; 

(function (Westeros){
  
  (function (Families) {

    const Lannister = (function () {

      function Lannister() {}

      Lannister.prototype.clone = function () {
        let clone = new Lannister()
        for(let attr in this) {
          clone[attr] = this[attr]
        }
        return clone
      }

      return Lannister

    })()

    Families.Lannister = Lannister
    
  })(Westeros.Families || (Westeros.Families = {}))

})(Westeros || (Westeros = {}));

module.exports = Westeros;