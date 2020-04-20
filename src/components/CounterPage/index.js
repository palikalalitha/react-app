import React from "react";
import { observer } from 'mobx-react';

import counter from "../../stores/CounterStore";
import { CounterContainer, IncrementButton } from "./styles";

//let regex = /^[0-9]*$/
@observer
class CounterApp extends React.Component {
  increment = () => {
    counter.incrementCounter()
  }

  decrement = () => {
    counter.decrementCounter()
    // const { decrementCounter } = counter
    // decrementCounter()
  }
  onChangeCount = (event) => {
    counter.updateCount(event.target.value)
  }
  render() {
    return (
      <CounterContainer>
      <IncrementButton onClick={this.increment}><h1>+</h1></IncrementButton>
<input  className="text-2xl font-bold w-26 h-16 m-2 border-red  border-solid border text-center" type="number" onChange={this.onChangeCount} value={counter.count}/>
      <IncrementButton onClick={this.decrement}><h1>-</h1></IncrementButton>   
      </CounterContainer>)
  }
}
export default CounterApp

















// import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'

// import stores from '../../stores'
// const counterStore = stores.counterStore

// @observer
// class CounterPage extends Component {
//   handleIncrement = () => {
//     counterStore.incrementCounter()
//   }

//   handleDecrement = () => {
//     if (counterStore.count !== 0) {
//       counterStore.decrementCounter()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{counterStore.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </div>
//     )
//   }
// }
