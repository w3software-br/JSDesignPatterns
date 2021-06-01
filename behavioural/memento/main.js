const log = require('./../../helpers/Log.js');

function Person(name, street, city, state) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
}

Person.prototype = {
  hydrate: function() {
    let memento = JSON.stringify(this);
    return memento;
  },

  dehydrate: function(memento) {
    let m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  }
}

function CareTaker() {
  this.mementos = {};

  this.add = function(key, memento) {
    this.mementos[key] = memento;
  },

  this.get = function(key) {
    return this.mementos[key];
  }
}

function run() {
  let mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
  let john = new Person("John Wang", "48th Street", "San Jose", "CA")

  let caretaker = new CareTaker();

  //save state
  caretaker.add(1, mike.hydrate());
  caretaker.add(2, john.hydrate());

  // miss up their names
  mike.name = 'king Kong';
  john.name = 'Superman';

  // restore original state
  mike.dehydrate(caretaker.get(1));
  john.dehydrate(caretaker.get(2));

  log.add(mike.name);
  log.add(john.name);

  log.show();

}

run();
