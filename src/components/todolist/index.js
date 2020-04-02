import React from 'react'
const root = document.getElementById('root');

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            dummy: [],
            todoCount: 0,
            footerStatus: "false"
        }
    }
    addTodoList = (event) => {
        if (event.keyCode === 13 && event.target.value !== "") {
            let userTodo = {
                todoContent: event.target.value,
                todoChecked: false,
                id: Date.now()
            }
            this.setState({
                todoCount: this.state.todoCount + 1
            })
            let input = [...this.state.todoList, userTodo];
            this.setState({
                todoList: input,
                dummy: input,
                footerStatus: "true"
            })
            event.target.value = ""

        }

    }
    checked = (id) => {
        let checkedId = this.state.todoList.indexOf(id)
        this.setState(item => {
            item.todoList[checkedId].todoChecked = !item.todoList[checkedId].todoChecked;
            if (item.todoList[checkedId].todoChecked === true) {
                item.todoCount -= 1
            }
            else {
                item.todoCount += 1
            }
            return item.todoList[checkedId].todoChecked

        })
    }
    all = () => {
        let s = this.state.dummy
        this.setState({
            todoList: s,
            todoCount: s.length
        })
    }
    active = () => {
        let s = this.state.dummy.filter(item => !item.todoChecked)
        this.setState({
            todoList: s,
            todoCount: s.length
        })
    }
    completed = () => {
        let s = this.state.dummy.filter(item => item.todoChecked)
        this.setState({
            todoList: s
        })
    }
    closeTodo = (item) => {
        let index = this.state.todoList.indexOf(item);
        let a = [...this.state.todoList];
        if (window.confirm("Do you want to delete this todo?..")) {
            a.splice(index, 1)
        }
        this.setState({
            dummy: a,
            todoList: a,
            todoCount: a.length
        })
    }
    clearCompleted = () => {
        let s = this.state.dummy.filter(item => !item.todoChecked)
        this.setState({
            todoList: s,
            dummy: s,
            todoCount: s.length
        })
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
                {this.state.todoList.map((item,index)=>
                 <CreateTodo key={item.id} id={item} input={item.todoContent} close={this.closeTodo} todoList={this.state.todoList} checked={this.checked} status={item.todoChecked}/>)
                }
            </div>
            <Footer count={this.state.todoCount} status={this.state.footerStatus} list={this.state.todoList}  all={this.all} active={this.active} showClear={this.state.footerClear} completed={this.completed} clear={this.clearCompleted}/>


        </div>)
    }
}
class CreateTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
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
            <div className={this.props.status}>
            <p>{this.props.count} itmes left</p>
            <p onClick={this.props.all}>All</p>
            <p onClick={this.props.active.bind(this,this.props.list)}>Active</p>
            <p onClick={this.props.completed}>Completed</p>
            <p className={this.props.showClear}onClick={this.props.clear}>Clear Completed</p>
        </div>
        )
    }

}
//ReactDOM.render(<Todo/>, root)
export { Todo }
