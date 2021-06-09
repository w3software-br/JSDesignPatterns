'strict'

const ShipAdapter = require('./models/ShipAdapter');

const ship = new ShipAdapter();
ship.GetCurrentPosition();
ship.TurnLeft()
ship.GetCurrentPosition();
ship.TurnRigth()
ship.GetCurrentPosition();



