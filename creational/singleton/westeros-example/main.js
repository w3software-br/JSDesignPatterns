'strict'

const Builder = require('./components/Builder');

const builder = new Builder();
const wall_one = builder.getWall();
const wall_twoo = builder.getWall();

console.log(wall_one == wall_twoo);


