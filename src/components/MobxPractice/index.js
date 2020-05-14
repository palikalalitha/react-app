import React, { Component } from 'react'
import { Provider, inject } from "mobx-react"
//Provider Practice
import { observer } from 'mobx-react'
import { observable, action ,computed,autorun} from "mobx"

//@observer

class MobxPractice extends Component {
  state = {
    name: "Michael",
    address: {
      city: "Hyderabad",
      country: "India",
    },
  };

  
  nextState = this.state;
  prevState = this.nextState;
  updateAddress = () => {
    console.log("in fun",this.prevState)
    this.prevState = this.state;
   
    this.setState({
     name:"f"
        });
  };

  render() {
    this.nextState = this.state;
    console.log(this.nextState,this.prevState)
    console.log(this.nextState === this.prevState);
    console.log(this.nextState.name === this.prevState.name);

    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>City: {this.state.address.city}</p>
        <p>Name: {this.state.address.country}</p>
        <button onClick={this.updateAddress}>Update address</button>
      </div>
    );
  }
}

// class MobxPractice extends Component {
//   @observable userDetails = null;
//   @observable count = 0;
//   @observable secondCount = 0;

//   @action
//   getUserDetails = async () => {
//    // await null;
//     this.count = this.count + 1;
//     this.secondCount = this.secondCount + 1;
//     let promise = new Promise((resolve, reject) => {
//       resolve({
//         name: "Tom Preston-Werner",
//         company: "Facebook",
//       });
//     });
//     let response =   promise;
//     this.setUserDetailsResponse("jhn");
//   };

//   @action.bound
//   setUserDetailsResponse(response) {
//     this.userDetails = response;
//   }

//   render() {
//     console.log("render UserProfile");
//     console.log(this.count, this.secondCount);

//     if (this.userDetails === null) {
//       return <button onClick={this.getUserDetails}>Get user details</button>;
//     }
//     return (
//       <div>
//         <p>Name: {this.userDetails.name}</p>
//         <p>Company: {this.userDetails.company}</p>
//       </div>
//     );
//   }
// }


// @observer
// class MobxPractice extends Component {
//   message;
//   constructor(props) {
//     super(props);
//     console.log("hii")
  
//     this.message = this.props.appStore.message
//   }

//   onChangeTitle = () => {
//     const { onChangeTitle } = this.props.appStore;
//     onChangeTitle("Hi");
//   };
//   render() {
//     console.log(this.message.title,this.message)
//     return (
//       <div>
//         <p>Message title: {this.message.title}</p>
//         <button onClick={this.onChangeTitle}>Change title</button>
//       </div>
//     );
//   }
// }


// class MobxPractice extends Component {
//   state = {
//     count: 2,
//     doubleTheCount: 3,
//     tripleTheCount: 4,
//   };

//   updateCounts = () => {
//     //await null;
//     this.setState({
//       count: this.state.count + 1,
//     });
//     this.setState({
//       doubleTheCount: this.state.doubleTheCount + 1,
//     });
//     this.setState({
//       tripleTheCount: this.state.tripleTheCount + 1,
//     });
//   };

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <p>Double Count: {this.doubleTheCount}</p>
//         <p>Triple Count: {this.tripleTheCount}</p>
//         <button onClick={this.updateCounts}>Update count</button>
//       </div>
//     );
//   }
// }
export default MobxPractice

// Reaction: log the profile info whenever it changes

// Example React component that observes state
// const MobxPractice = observer((props) => {
//   console.log("render ProfileView");

//   return (
//     <div>
//       <p>{props.person.fullName}</p>
//       <button onClick={props.person.changeFirstNameAndLastName}>
//         Change first name and last name
//       </button>
//     </div>
//   );
// });



// class MobxPractice extends Component {
//   @observable firstName = "Ramu";
//   @observable lastName = "Ratnam";
//   @observable initial = "K";

//   @computed get fullName() {
//     console.log("Computed");
//     return this.lastName + " " + this.initial;
//   } 
//  @action.bound
//     changeFirstNameAndLastName = () => {
//     this.firstName = "Mark";
//     this.lastName="lalitha"
//   };

//   getFullNameFn = () => {
//     console.log("getFullNameFn called");
//     return this.lastName + " " + this.initial;
//   };

//   render() {
//     return (
//       <div>
//         <p>FirstName: {this.firstName}</p>
//         <p>Fullname: {this.fullName}</p>
//         <p>{this.getFullNameFn()}</p>
//         <button onClick={this.changeFirstNameAndLastName}>
//           Change first name and last name
//         </button>
//       </div>
//     );
//   }
// }

// //doubt error address is not defined 
// class MobxPractice extends Component
// { 
//   @observable obj = {
//     name: "Michael",
//     address: {
//       city: "Hyderabad",
//       country: "India"
//     }
//   };

//   prevCityState = this.obj.address.city;
//   nextCityState = this.obj.address.city;

//   updateAddress = () => {
//     this.prevCityState = this.obj.address.city;
//     this.obj.address.city = "Delhi";
//   };

//   render() {
//     this.nextCityState = this.obj.address.city;
//     console.log(this.nextCityState,this.prevCityState)
//     console.log(this.nextCityState === this.prevCityState);

//     return (
//       <div>
//        <p>City: {this.obj.address.city}</p>
//         <p>Name: {this.obj.address.country}</p>
//         <button onClick={this.updateAddress}>Update address</button>
//       </div>
//     );
//   }
// }



















//class MobxPractice extends Component {
  //    state = {
  //       name: "Michael",
  //       address: {
  //         city: "Hyderabad",
  //         country: "India",
  //       },
  //     };
    
  //     updateAddress = () => {
  //       this.state.address.city = "Delhi";
  //     };
    
  //     render() {
  //       console.log("render PersonDetails");
  //       return (
  //         <div>
  //           <p>Name: {this.state.name}</p>
  //           <p>City: {this.state.address.city}</p>
  //           <p>Name: {this.state.address.country}</p>
  //           <button onClick={this.updateAddress}>Update address</button>
  //         </div>
  //       );
  //     }
  // }





// import mobxObject from "../../stores/MobxStore/index.js"
//import counter from "../../stores/MobXPractice"

// @inject("temp")
// class C extends React.Component {
//     render() {
//         const { temp, name } = this.props
//         console.log("C", temp, name)
//         return <div >{temp}</div>
//     }
// }


// @inject("temp")
// @observer
// class B extends React.Component {
//     @observable name
//     @action
//     onChange = (event) => {
//         this.name = event.target.value
//     }
//     render() {
//         const { temp } = this.props
//         console.log(temp)
//         return <div>
//         <input type="text" value={this.name} style={{background:"pink"}} onChange={this.onChange}/>
//         <C name={this.name}/>
//         </div>
//     }
// }


// class MobxPractice extends Component {
//     render() {
//         return <Provider temp="hiii">
//         <B temp={'from b'}/>
//         </Provider>
//     }
// }
