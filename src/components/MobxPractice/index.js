import React, { Component } from 'react'
import { Provider, inject } from "mobx-react"
//Provider Practice
import { observer } from 'mobx-react'
import { observable, action } from "mobx"
 class MobxPractice extends Component {
     render()
     {
         return(
             <div></div>)
     }
 }








// import mobxObject from "../../stores/MobxStore/index.js"
//import counter from "../../stores/MobXPractice"

// @inject("temp")
// class C extends React.Component {
//     render() {
//         const { temp, name } = this.props
//         console.log("C", temp, name)
//         return <div >{temp}</div>
//     }
// }


// @inject("temp")
// @observer
// class B extends React.Component {
//     @observable name
//     @action
//     onChange = (event) => {
//         this.name = event.target.value
//     }
//     render() {
//         const { temp } = this.props
//         console.log(temp)
//         return <div>
//         <input type="text" value={this.name} style={{background:"pink"}} onChange={this.onChange}/>
//         <C name={this.name}/>
//         </div>
//     }
// }


// class MobxPractice extends Component {
//     render() {
//         return <Provider temp="hiii">
//         <B temp={'from b'}/>
//         </Provider>
//     }
// }
  export default MobxPractice
