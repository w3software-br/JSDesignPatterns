'strict'

const Prayer = require('./components/Prayer')

let prayer = new Prayer();

const god = prayer.pray("watery");
god.prayTo();

const god1 = prayer.pray("ancient");
god1.prayTo();

const god2 = prayer.pray("any");
god2.prayTo();