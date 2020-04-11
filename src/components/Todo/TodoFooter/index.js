import React from 'react'
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
export default Footer
