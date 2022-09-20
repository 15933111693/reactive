import Dep from "./Dep.js";
import schedular  from "./schedular.js"

export default function definReactive(obj, key, value) {
  let dep = new Dep()
  const notify = dep.notify.bind(dep)
  Object.defineProperty(obj, key, {
    get() {
      if(Dep.target) {
        dep.depend()
      }
      return value
    },
    set(newVal) {
      value = newVal
      schedular(notify)
      // notify()
    }
  })
}