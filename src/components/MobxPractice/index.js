import React, { Component } from 'react'
import { Provider, inject } from "mobx-react"
//Provider Practice
import { observer } from 'mobx-react'
import { observable, action } from "mobx"
@observer
class MobxPractice extends Component {
     state = {
    count: 2,
  };
  updateCount = () => {
    this.setState({
      count: this.state.count++,
    });
  };

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.updateCount}>Update count</button>
      </div>
    );
}
//doubt error address is not defined     @observable state = {
//     name: "Michael",
//     address: {
//       city: "Hyderabad",
//       country: "India"
//     }
//   };

//   prevCityState = this.state.address.city;
//   nextCityState = this.state.address.city;

//   updateAddress = () => {
//     this.prevCityState = this.state.address.city;
//     this.state.address.city = "Delhi";
//   };

//   render() {
//     this.nextCityState = this.state.address.city;
//     console.log(this.nextCityState === this.prevCityState);

//     return (
//       <div>
//         <p>Name: {this.state.name}</p>
//         <p>City: {this.state.address.city}</p>
//         <p>Name: {this.state.address.country}</p>
//         <button onClick={this.updateAddress}>Update address</button>
//       </div>
//     );
//   }

}
export default MobxPractice




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
