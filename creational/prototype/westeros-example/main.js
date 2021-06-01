'strict'

const Westeros = require('./Components/Westeros')

let jamie = new Westeros.Families.Lannister()
jamie.name = 'jamie'
jamie.swordSkills = 9;
jamie.charm = 6;
jamie.wealth = 10;
console.log(jamie)

let tyrion = jamie.clone();
tyrion.name = 'tyrion'
tyrion.charm = 10;
console.log(tyrion)
