'use strict'

const Builder = require('./components/Builder');

const builder = new Builder();
const wall_one = builder.getWall();
wall_one.setHeight(56);
console.log(wall_one.getHeight());

const wall_twoo = builder.getWall();
console.log(wall_twoo.getHeight());


