import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable,values } from "mobx";

const persons = observable(new Map());

// const data = [
//   {
//     id: 1,
//     name: "Sri Potti Sriramulu",
//     city: "Nellore",
//     state: "Andhra Pradesh",
//   },
//   {
//     id: 2,
//     name: "Pingali Venkayya",
//     city: "Vijayawada",
//     state: "Andhra Pradesh",
//   },
//   {
//     id: 3,
//     name: "Hanuma Vihari",
//     city: "Kakinada",
//     state: "Andhra Pradesh",
//   },
// ];

// data.forEach((person) => {
//   persons.set(person.id, person);
// });

// const cities1 = [];
// for (const [key, value] of persons.entries()) {
//   cities1.push(value.city);
// }

// const cities2 = Array.from(persons.values()).map((person) => person.city);

// const cities3 = values(persons).map((person) => person.city);
// console.log(cities1,cities2,cities3,values(persons),Array.from(persons.values()))

//const cities4 = Array.from(persons.values()).map((person) => person.city);
//console.log(Array.from(persons.values()))

class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
     console.log("update")
    console.log(this.props.value,"next=>",nextProps.value)
    if (this.props.value === nextProps.value) {
      return false;
    }
    return true;
  }

  render() {
    console.log("new item");
    return <li>{this.props.value}</li>;
  }
}

@observer
class Bits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [0, 10, 20, 30, 40, 50] };
  }
  renderListItems = () => {
    const { numbers } = this.state;
    return numbers.map((number, index) => (
      <ListItem key={Math.random()} value={number} />
    ));
  };

  addNumberToList = () => {
    const { numbers } = this.state;

    this.setState({
      numbers: [...numbers, numbers.length * 10],
    });
  };

  render() {
    return (
      <div>
        <ul>{this.renderListItems()}</ul>
        <button onClick={this.addNumberToList}>Add number</button>
      </div>
    );
  }
}
export default Bits