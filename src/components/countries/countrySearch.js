import React from 'react'
import { GoSearch } from 'react-icons/go';
import { SearchBar, SearchBox, SearchIcon } from './styledComponents'
class CountrySearch extends React.Component {

    onChangeSearchText = (event) => {
        const { searchText } = this.props
        if (event.keyCode === 13) {
            let userInput = event.target.value
            let regex = /^[a-zA-z]*$/
            try {
                if (regex.test(userInput)) {
                    searchText(userInput)
                }
                else {
                    alert("Enter valid characters")
                }
            }
            catch (e) {
                alert(e);

            }

        }
    }
    render() {
        const { selectTheme } = this.props
        return (
            <SearchBox id={selectTheme}>
            <SearchIcon><GoSearch/></SearchIcon>
            <SearchBar id={selectTheme} placeholder="Search for a country" onKeyDown={this.onChangeSearchText}/>
        </SearchBox>
        )
    }
}
export default CountrySearch
