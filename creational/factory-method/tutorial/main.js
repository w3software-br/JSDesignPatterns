'strict'
const Factory = require('./components/Factory');


const factory = new Factory();
let productA = factory.build(1);
let productB = factory.build(2);
let product = factory.build('any');

productA.getDescription();
productB.getDescription();
product.getDescription();

