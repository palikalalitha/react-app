// Write your React Code here
import React from 'react'
const root = document.getElementById('root')
let carId = 1
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Start",
            status: "Stopped",
            speed: 0
        }
    }
    onStartOrStop = () => {
        if (this.state.status === "Stopped") {
            this.setState({ status: "Running", buttonText: "Stop" })
        }
        else {
            this.setState({ status: "Stopped", buttonText: "Start", speed: 0 })

        }

    }
    onApplyBrake = () => {
        if (this.state.status === "Running") {
            let carSpeed = this.state.speed - 10
            this.setState({
                speed: carSpeed
            })
            if (carSpeed === 0) {
                this.setState({
                    status: "Running"
                })
            }
        }
    }
    onAccelerate = () => {
        if (this.state.status === "Running") {
            let carSpeed = this.state.speed + 10
            this.setState({
                speed: carSpeed
            })
        }
    }
    displayStatusText = () => {
        if (this.state.status === "Running") {
            if (this.state.speed > 0) {
                return `Running with speed of ${this.state.speed} km/h`;
            }
            else {
                return "Running"
            }
        }
        else {
            return "Stopped"
        }

    }
    render() {
        return (
            <div className="car-warpper">   
            <div className="car-box">   
                <p>Car-{this.props.carId}</p>
                <p className="close-btn" onClick={()=>this.props.remove(this.props.carId)} >&times;</p>
            </div>
            <div className="car">
                <button type="button" className={this.state.status} onClick={this.onStartOrStop}>
                {this.state.buttonText}
                </button>
                <p>
                    Status : {this.displayStatusText()}
                </p>
                <button type="button" className="accelerate-btn" disabled={this.state.status==="Stopped"} onClick={this.onAccelerate}>Accelarate </button>
                <button type="button" className="break-btn" disabled={this.state.status==="Stopped"} onClick={this.onApplyBrake}>Apply Brake</button>
            </div>
        <hr/> 
        </div>)
    }
}
class CarsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carList: [1]
        }
    }
    addCarToCarsList = () => {
        if (this.state.carList.length === 0) {
            carId = 1;
        }
        else {
            let l = this.state.carList.length
            carId = this.state.carList[l - 1] + 1;
        }
        let carArray = [...this.state.carList, carId]
        this.setState({
            carList: carArray
        })
    }
    removeCarFromCarsList = (deleteCarId) => {
        let carArray = [...this.state.carList]
        let removeId = carArray.indexOf(deleteCarId);
        carArray.splice(removeId, 1);
        this.setState({
            carList: carArray
        })
    }

    renderCarsList = () => {}
    render() {
        return (
            <div>      
            <button tye="button" className="add-car" onClick={this.addCarToCarsList}>Add car</button>
                   <div>{this.state.carList.map((item)=>
                <Car carId={item}  key={item} remove={this.removeCarFromCarsList}/>)}</div>
            </div>);
    }

}
// ReactDOM.render(<CarsList/>, root)
export { Car, CarsList }
