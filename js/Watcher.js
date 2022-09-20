import { popTarget, pushTarget } from "./Dep.js"

class Watcher {
  constructor(fn) {
    this.getter = fn
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()

    this.get()
  }

  get() {
    pushTarget(this)
    this.getter()
    popTarget()
    this.cleanupDeps()
  }

  update() {
    this.get()
  }

  addDep(dep) {
    const { id } = dep
    if(!this.newDepIds.has(id)) {
      this.newDeps.push(dep)
      this.newDepIds.add(id)

      if(!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }

  cleanupDeps() {
    for(let i=0;i<this.deps.length;i++) {
      const dep = this.deps[i]
      if(!this.newDepIds.has(dep.id)) {
        dep.removeSub(this)
      }
    }

    [this.depIds, this.newDepIds] = [this.newDepIds, this.depIds]
    this.newDepIds.clear()
    let tmp = this.deps
    this.deps = this.newDeps
    this.newDeps = tmp
    this.newDeps.length = 0
  }

  teardown() {
    for(let i=0;i<this.deps.length;i++) {
      const dep = this.deps[i]
      dep.removeSub(this)
    }
  }
}

export default Watcher

export function effect(fn) {
  return new Watcher(fn).teardown
}