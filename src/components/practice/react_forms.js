const root = document.getElementById('root');
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userText: "",
            selectedValue: "",

            addresList: ["kakinada", "vizag", "guntur", "vijayawada", "rajamundry", "tuni", "srikakulam"],
            searchResults: []
        }
        this.getUserData = this.getUserData.bind(this)
        this.showUserData = this.showUserData.bind(this)
    }
    getUserData(event) {
        // console.log(event.target.value)
        this.setState({
            userText: event.target.value
        })

    }
    showUserData(event) {
        console.log("the user name is", this.state.userText)
        console.log("the user selected color:  ", this.state.selectedValue)
        console.log("the user selected city:  ", this.state.searchResults)
        event.preventDefault();

    }
    getUserSelectedValue = (event) => {
        this.setState({
            selectedValue: event.target.value
        })
    }
    onSearchResults = (event) => {
        let listOfAdddress = this.state.addresList;
        let searchResults = listOfAdddress.filter(eachaddress => eachaddress.toLowerCase().search(event.target.value.toLowerCase()) !== -1)
        this.setState({
            searchResults: searchResults
        })


    }
    componentWillMount = () => {
        this.setState({
            searchResults: this.state.addresList
        })
    }
    // showUserData(event) {
    //     console.log("the user entered text is", this.state.value)
    //     event.preventDefault();

    // }
    render() {

        return (
            <div>
           <form onSubmit={this.showUserData}>
           <label>Name:
                <input type="textbox" className="" onChange={this.getUserData} defaultValue={this.state.userText}/>
            </label>
            <br/>
            <label>Pick your favourite color:
            <select value={this.state.selectedValue} onChange={this.getUserSelectedValue}> 
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="black">black</option>
            </select>
            </label>
            <div>
            <label>Enter your City:</label>
            <input type="text" placeholder="search" onChange={this.onSearchResults}/>
            {
                this.state.searchResults.map(item => {
                    <div>{item}</div>
                })
            }
            </div>
            <input type="submit" value="submit"/>
            </form>
              
           </div>)
    }
}
ReactDOM.render(<NameForm/>, root)
