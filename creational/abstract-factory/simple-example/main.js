'strict'
const FactoryA = require('./Factories/FactoryA');
const FactoryB = require('./Factories/FactoryB');
const Builder = require('./Builder');

const builder1 = new Builder(new FactoryA());
const instance1 = builder1.getInstance();
instance1.getType();

const builder2 = new Builder(new FactoryB());
const instance2 = builder2.getInstance();
instance2.getType();