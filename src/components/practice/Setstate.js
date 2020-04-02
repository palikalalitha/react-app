//import React from 'react';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//     };
//     forceUpdateHandler() {
//         this.forceUpdate();
//     };
//     render() {
//         return (
//             <div>
//             <button onClick = {this.forceUpdate()}>FORCE UPDATE</button>
//             <h4>Random number: {Math.random()}</h4>
//          </div>
//         );
//     }
// }

//ReactDOM.render(<App/>, root)

//export default App;






// let state = {
//     count: 0
// }
// Object.assign(state, { count: state.count + 1 }, { count: state.count + 1 }, { count: state.count + 1 }, { count: state.count + 1 })
// console.log("first log", state)

//import React from 'react'
class ParentCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parentCount: 0
        }
    }
    onParentCountIncrement = () => {
        this.setState({
            parentCount: this.state.parentCount + 1
        })
    }
    render() {
        //  console.log(typeof this.state)
        return (

            <div>
            <p>parent{this.state.parentCount}</p>
                <ChildCounter parentCounterIncerment={this.onParentCountIncrement} parentCount={this.state.parentCount}/>
                </div>
        )
    }
}
class ChildCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childCount1: 0,
            childCount2: 0
        }
    }
    onIncrement = () => {
        this.props.parentCounterIncerment()
        console.log(this.props.parentCount)
        console.log(this.props.parentCount)
        this.props.parentCounterIncerment()

        this.setState({
            childCount1: this.state.childCount1 + 1
        })
    }
    render() {
        return (
            <div>
                        <p>child{this.state.childCount1}</p>
            <button onClick={this.onIncrement}>Increment</button>
            <p>{this.state.childCount1}</p>
            </div>
        )
    }

}
//ReactDOM.render(<ParentCounter/>, root)
class Count extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    onIncrement = () => {
        // this.setState({ count: this.state.count + 1 })
        // console.log("first log", this.state.count)
        // this.setState({ count: this.state.count + 1 })
        // console.log("second log", this.state.count)
        // this.setState({ count: this.state.count + 1 })
        // console.log("third log", this.state.count)
        // this.setState({ count: this.state.count + 1 })
        // console.log("fourth log", this.state.count)
        this.setState(c => ({
            count: c.count + 1
        }))
        this.setState(c => ({
            count: c.count + 1
        }))

        this.setState({ count: this.state.count + 1 })

        // this.setState(c => ({
        //     count: c.count + 1
        // }))
        // this.setState(c => ({
        //     count: c.count + 1
        // }))
        // this.setState(c => ({
        //     count: c.count + 1
        // }))
        console.log("first log", this.state.count)

    }
    render() {
        return (
            <div><button onClick={this.onIncrement}>Increment</button>
            <p>{this.state.count}</p>
            </div>)
    }
}
ReactDOM.render(<Count/>, document.getElementById('root'))
