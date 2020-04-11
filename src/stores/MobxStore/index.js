import { observable, action, computed, autorun } from 'mobx'

class MobxStore {
    message = observable({
        title: "Foo",
        author: {
            name: "Michel"
        },
        likes: ["John", "Sara"]
    })

    numbers = observable([1, 2, 3])
    sum = computed(() => this.numbers.reduce((a, b) => a + b, 0))
    // autorun = () => {
    //     console.log(this.sum.get(), { delay: 600 })
    // }
    run = autorun(() =>
        console.log(this.sum.get()), { delay: 300 })

    age = observable.box(10)
    checkAge = autorun(
        () => {
            if (this.age.get() < 0) throw new Error("Age should not be negative")
            console.log("Age", this.age.get())
        }, {
            onError(e) {
                window.alert("Please enter a valid age")
            }
        }
    )
    // prints '6'
    //numbers.push(4)
    // prints '10'

    // disposer()
    //numbers.push(5)
}
const mobxObject = new MobxStore()
export default mobxObject
