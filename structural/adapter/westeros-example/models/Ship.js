'strict'

const Ship = (function () {

  function Ship() {
    this._currrentBearing = 10;
    this._currentSpeedEstimate = 10;
    this._sailId = 0; this._sailAngle = 0;
    this._angle = 0;
  }

  Ship.prototype.SetRudderAngleTo = function (angle) {
    this._angle = angle;
  }

  Ship.prototype.SetSailConfiguration = function (configuration) {
    this._configuration = configuration;
  }

  Ship.prototype.SetSailAngle = function (sailId, sailAngle) {
    this._sailId = sailId; this._sailAngle = sailAngle;
  }

  Ship.prototype.GetCurrentBearing = function () {
    return this._currrentBearing;
  }

  Ship.prototype.GetCurrentSpeedEstimate = function () {
    return this._currentSpeedEstimate;
  }

  Ship.prototype.ShiftCrewWeightTo = function (weightToShift, locationId) {
    this._weightToShift = weightToShift;
    this._locationId = locationId;
  }

  Ship.prototype.GoToForward = function () {
    console.log("Let's go baby");
  }

  Ship.prototype.CurrentPosition = function () {
    let msg = `
    angle:  ${this._angle};
    sailId: ${this._sailId};
    sailAngle: ${this._sailAngle}
    `
    return msg;
  }

  return Ship;

})()

module.exports = Ship;