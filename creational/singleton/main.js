function Singleton() {

  let instance = null;

  function createInstance() {
    instance = new Object("I am the instance")
    return instance
  }

  return {
    getInstance: () => {
      if(!instance) {
        instance = createInstance();
      } 
      return instance;
    }
  }

}

const singleton = new Singleton()
let instance1 = singleton.getInstance()
let instance2 = singleton.getInstance()
console.log(instance1 === instance2)