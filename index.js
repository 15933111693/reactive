import  Observer  from './js/Observer.js'
import { effect } from './js/Watcher.js'

const input = document.querySelector('#input')
const div = document.querySelector('#val')
const obj = {
  input: 1
}

new Observer(obj)

effect(() => {
  div.innerText = obj.input
})

input.addEventListener('input', (e) => {
  obj.input = e.target.value
  obj.input = e.target.value + '1'
  obj.input = e.target.value + '2'
})