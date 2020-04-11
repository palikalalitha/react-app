import { observable, action, computed } from 'mobx'

class CounterStore {
   @observable count = 0

   @action
   incrementCounter() {
      this.count++
   }
   @action
   updateCount = (newValue) => {

      this.count = newValue
   }
   @action
   decrementCounter() {
      this.count--
   }
}
const counter = new CounterStore()
export default counter
