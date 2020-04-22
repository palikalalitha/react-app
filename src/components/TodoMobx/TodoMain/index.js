 import * as React from "react"
 import { observer } from "mobx-react"


 import NoDataView from "../../common/NoDataView"

 import TodoFooter from "../TodoFooter/index.js"

 import TodoListMobx from "../TodoListMobx/index"
 import AddTodo from "../AddTodo/index"
 import { TodoAppContainer, Heading } from "../TodoApp/styles.js"

 @observer
 class TodoMain extends React.Component {
  render() {
   const { store } = this.props
   const { selectedFilter } = store
   const count = store.getTodoCount
   const todos = store.filteredTodos
   return (<TodoAppContainer>
                <Heading>todos</Heading>
                     <AddTodo/>
                     {count>0?
                     <div>
                     <TodoListMobx todos={todos}/>       
                     <TodoFooter selectedFilter={selectedFilter} todoCount={count}/>  
                     </div>
                     :<NoDataView/>}
                     
              </TodoAppContainer>)
  }

 }
 export default TodoMain
 