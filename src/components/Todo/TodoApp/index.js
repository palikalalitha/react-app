import React from 'react'
import { observer } from "mobx-react"
import store from "../../../stores/TodoStore/index.js"
@observer class Todosapp extends React.Component {
    add = (event) => {
        console.log(event)
        if (event.key === 'Enter') {
            console.log(event.target.value)
            store.addTodo(event.target.value)
        }
    }
    render() {
        return (
            <div>
            hlo
            <input type="text" className="m-1 bg-gray-700" 
            onChange={this.add}/>
            <p></p>
            </div>)
    }
}
export default Todosapp;
