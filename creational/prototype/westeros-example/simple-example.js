const Person = (function () {
  function Person() {}

  Person.prototype.clone = function () {
    let clone = new Person()
    for(let attr in this) {
      clone[attr] = this[attr]
    }
    return clone;
  }

  return Person
})();

let p1 = new Person()
p1.name = "Adriano Oliveira"
p1.profession = "Pianist"

let p2 = p1.clone()
p2.name = "July Watson"
p2.profession = "Programmer"

console.log(p1)
console.log(p2)
