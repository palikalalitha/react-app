import React from 'react'
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
export default CreateTodo
