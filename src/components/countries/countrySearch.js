import React from 'react'
import { GoSearch } from 'react-icons/go';
class CountrySearch extends React.Component {
    onChangeSearchText = (event) => {
        if (event.keyCode === 13) {
            let userInput = event.target.value
            let regex = /^[a-zA-z]*[^/\!@#$%}{|?}]$/
            if (regex.test(userInput)) {
                this.props.searchText(userInput)
            }
            else {
                alert("Enter valid characters")
            }
        }
    }
    render() {
        return (
            <div style={this.props.selectTheme?darkMode:lightMode}>
            <h3 style={img}><GoSearch/></h3>
            <input type="textbox" className={this.props.selectTheme?"dark searchbarDarkMode":"light searchbarLightMode"}placeholder="Search for a country" onKeyDown={this.onChangeSearchText}/>
        </div>
        )
    }
}
export { CountrySearch }
const darkMode = {
    marginLeft: "4px",
    display: "flex",
    width: "200px",
    height: "50px",
    backgroundColor: "#3b4e5e",
    color: "white",
    boxShadow: "0 3px 3px #3b4e5e",
}
const lightMode = {
    marginLeft: "4px",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    width: "200px",
    height: "50px",
    boxShadow: "0 3px 3px silver",
}
const img = {
    marginLeft: "5px"
}
