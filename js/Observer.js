import definReactive from "./defineReactive.js"

class Observer {
  constructor(obj) {
    this.walk(obj)
  }

  walk(obj) {
    for(let i in obj) definReactive(obj, i, obj[i])
  }
}

export default Observer