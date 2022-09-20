let uid = 0
class Dep {
  static target = null
  constructor() {
    this.subs = []
    this.id = uid++
  }

  addSub(watcher) {
    this.subs.push(watcher)
  }

  removeSub(watcher) {
    this.subs.splice(this.subs.indexOf(watcher), 1)
  }

  depend() {
    if(Dep.target) Dep.target.addDep(this)
  }

  notify() {
    const subs = this.subs.slice()
    for(let watcher of subs) watcher.update()
  }
}

export default Dep

const targetStack = []

export function pushTarget (target) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}