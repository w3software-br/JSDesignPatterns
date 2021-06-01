'strict'

function Westeros() {
  this.Test = "Test"
  this.Wall = () =>  {
    this.heght = 0;
    return [this.Test, this.heght, this]
  }
}

let westeros = new Westeros()
console.log(westeros.Wall())