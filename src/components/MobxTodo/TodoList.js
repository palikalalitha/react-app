import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from "mobx-react"

//const root = document.getElementById('root');

@observer class TodoList extends React.Component {
    todo = observable({
        todoList: [],
        dummy: [],
        todoCount: 0,
        todoChecked: false,
        footerStatus: false
    })
    // @observable todoList = []
    // @observable dummy = []
    // @observable todoCount = 0
    // @observable footerStatus = false

    incrementTodoCount = () => {
        this.todo.todoCount++;
    }
    addTodoItems = (input, footerState) => {
        this.todo.todoList = input,
            this.todo.dummy = input,
            this.todo.footerStatus = footerState

    }
    addTodoList = (event) => {
        if (event.keyCode === 13 && event.target.value !== "") {
            let userTodo = {
                todoContent: event.target.value,
                todoChecked: false,
                id: Date.now()
            }
            this.incrementTodoCount()
            let input = [...this.todo.todoList, userTodo];
            this.addTodoItems(input, true)
            event.target.value = ""

        }

    }
    checked = (id) => {
        let checkedId = this.todo.todoList.indexOf(id)
        this.todo.todoList[checkedId].todoChecked = !this.todo.todoList[checkedId].todoChecked;
        if (this.todo.todoList[checkedId].todoChecked) {
            this.todo.todoCount--;
        }
        else {
            this.todo.todoCount++;
        }
        return this.todo.todoList[checkedId].todoChecked
    }
    all = () => {
        let s = this.todo.dummy
        this.todo.todoList = s
        this.todo.todoCount = s.length
    }
    active = () => {
        let s = this.todo.dummy.filter(item => !item.todoChecked)
        this.todo.todoList = s
        this.todo.todoCount = s.length
    }
    completed = () => {
        let s = this.todo.dummy.filter(item => item.todoChecked)
        this.todo.todoList = s
    }
    closeTodo = (item) => {
        let index = this.todo.todoList.indexOf(item);
        let a = [...this.todo.todoList];
        if (window.confirm("Do you want to delete this todo?..")) {
            a.splice(index, 1)
        }
        this.updateTodo(a)
    }
    updateTodo = (newTodos) => {
        this.todo.dummy = newTodos,
            this.todo.todoList = newTodos,
            this.todo.todoCount = newTodos.length
    }
    clearCompleted = () => {
        let s = this.todo.dummy.filter(item => !item.todoChecked)
        this.updateTodo(s)
    }
    render() {
        return (
            <div>
            <div className="todo-wraper">
                <h1 className="todo-header">todos</h1>
                <div className="input-box">
                 <input type="text" className="text-box" placeholder="What needs to be done.." onKeyDown={this.addTodoList}/>
                </div>
            </div>
            <div>
                {this.todo.todoList.map((item,index)=>
                 <CreateTodo key={item.id} id={item} input={item.todoContent} close={this.closeTodo} todoList={this.todo.todoList} checked={this.checked} status={item.todoChecked}/>)
                 }
                             </div>
            <Footer count={this.todo.todoCount} status={this.todo.footerStatus} list={this.todo.todoList}  all={this.all} active={this.active} showClear={this.todo.footerStatus} completed={this.completed} clear={this.clearCompleted}/>


        </div>)
    }
}
class CreateTodo extends React.Component {
    render() {
        return (
            <div>
            <div className="todo">
            <input type="checkbox" className="checkbox" checked={this.props.status} onChange={this.props.checked.bind(this,this.props.id)}/>
            <input type="textbox" className="result-box"  disabled={this.props.status} defaultValue={this.props.input}/>
            <button type="button" className="close-btn" onClick={this.props.close.bind(this,this.props.id)}>&times;</button>
            </div>

            </div>
        )
    }
}
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={footer}className={this.props.status}>
            <p>{this.props.count} itmes left</p>
            <p onClick={this.props.all}>All</p>
            <p onClick={this.props.active.bind(this,this.props.list)}>Active</p>
            <p onClick={this.props.completed}>Completed</p>
            <p className={this.props.showClear}onClick={this.props.clear}>Clear Completed</p>
        </div>
        )
    }

}
const footer = {
    display: "flex",
    justifyContent: "center"

}
//ReactDOM.render(<Todo/>, root)
export { TodoList }
