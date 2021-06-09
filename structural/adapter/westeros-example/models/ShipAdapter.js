'strict'
const Ship = require('./Ship');

const ShipAdapter = (function () {

  function ShipAdapter() {
    this._ship = new Ship();
  }

  ShipAdapter.prototype.TurnLeft = function () {
    console.log("TurnLeft");
    this._ship.SetRudderAngleTo(-30);
    this._ship.SetSailAngle(3, 12); // definir ângulo de vela
  }

  ShipAdapter.prototype.TurnRigth = function () {
    console.log("TurnRigth");
    this._ship.SetRudderAngleTo(45) // Definir o ângulo do leme para 
    this._ship.SetSailAngle(5, -9)
  }

  ShipAdapter.prototype.GoToForward = function () {
    this._ship.GoToForward()
  }

  ShipAdapter.prototype.GetCurrentPosition = function () {
    console.log(this._ship.CurrentPosition())
  } 

  return ShipAdapter;

})()

module.exports = ShipAdapter;