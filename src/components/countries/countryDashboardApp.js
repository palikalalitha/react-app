import React from 'react'
import tw from 'tailwind.macro'
import CountriesFilterBar from './countriesFilterBar.js'
import { GoSync } from "react-icons/go"
import CountryCard from './countryCard.js'
import { Header } from './header.js'
//import { CountryApp, HeaderWrapper } from './styledComponents.js'
let regionsList = []
let filterList = []
class CountryDashboardApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countriesList: [],
            searchText: "",
            selectedRegion: "all",
        }
    }
    async componentDidMount() {
        try {
            let response = await fetch("https://restcountries.eu/rest/v2/all ")
            let data = await response.json()
            this.setState({
                countriesList: data,
            });
            filterList = data
        }
        catch (error) {
            alert("Loading error")
        }
    }
    onChangeSearchText = (userInput) => {
        this.setState({
            searchText: userInput
        })
        this.filterCountriesBySearchText(userInput)
    }

    onChangeSelectedRegion = (userInput) => {
        this.setState({
            selectedRegion: userInput
        })
        this.filterSelectedRegions(userInput)
    }
    filterCountriesBySearchText = (userInput) => {
        let countryRegion = this.state.selectedRegion
        this.searchCountries(userInput, countryRegion)
    }

    filterSelectedRegions = (userInput) => {
        let countryName = this.state.searchText
        this.searchCountries(countryName, userInput)
    }
    searchCountries = (countryName, countryRegion) => {
        if (countryName === "" && countryRegion === "all") {
            filterList = this.state.countriesList
        }
        else if (countryName !== "" && countryRegion !== "all") {
            let countriesNames = this.state.countriesList.filter(eachCountry => eachCountry.name.toLowerCase().search(countryName.toLowerCase()) !== -1)
            let result = countriesNames.filter(eachRegion => eachRegion.region === countryRegion)

            filterList = result

        }
        else if (countryName !== "" && countryRegion === "all") {
            let searchResults = this.state.countriesList.filter(eachCountry => eachCountry.name.toLowerCase().search(countryName.toLowerCase()) !== -1)

            filterList = searchResults

        }
        else if (countryName === "" && countryRegion !== "all") {
            let searchResults = this.state.countriesList.filter(eachCountry => eachCountry.region.toLowerCase().search(countryRegion.toLowerCase()) !== -1)
            filterList = searchResults
        }
    }


    getRegionOptions = () => {
        let countriesData = this.state.countriesList
        regionsList = [...new Set(countriesData.map(item => item.region))]
    }
    render() {
        const { selectTheme, changeTheme } = this.props
        const { countriesList } = this.state
        return (
            <div className={selectTheme?"dark":"light"}>
                <div style={header} className={selectTheme?"dark":"light"}>
                    <Header changeTheme={changeTheme} selectTheme={selectTheme} />
                </div> 
                
              {this.getRegionOptions()}
            <div  style={filterBar} className={selectTheme?"dark":"light"}>
             <CountriesFilterBar regionsList={regionsList} selectTheme={selectTheme}
             searchText={this.onChangeSearchText} selectedRegion={this.onChangeSelectedRegion} />
            </div>
            
            <div className={selectTheme?"dark countrycard":"light countrycard"} >
                {filterList.length>0 ?
                filterList.map((item,index)=>
                    <CountryCard  countryDetails={item} allCountries={countriesList} selectTheme={selectTheme}/>)
                    :<h1 className="Loading"><GoSync/>Loading</h1>}
            </div>
            </div>)
    }
}
export { CountryDashboardApp }
const header = { marginBottom: "5px" }
const filterBar = { padding: "20px" }











// // steps
// 1. dividing componenys
//     -
// dashboard
//     -
//     header -
//     themeSelector -
//     filterBar -
//     mangae layouts countrysearh adn region -
//     countrySearch -
//     selectCountryRegion -
//     countriesList -
//     countrCard
// 2. state
// minimum using props
// based on data
//     -
//     countries
// 5 things
//     -
//     countrCard
// 5 things
//     -
//     header
// no props
//     -
//     filterBar -
//     countrySearch
// no props
//     -
//     selectCountryRegion
// regionsList

// 3. App state

//     -
//     selectTheme -
//     countries -
//     searchText
// selctregion
//     -
//     searchTextBackground color -
//     searchTextplaceholodercolor -
//     searchTextBordercolor -
//     isloading -
//     selctregion -
//     selectedregionBackgroudncolor -
//     cardBackgroudncolor -
//     dashboard Backgrouncolor -
//     dropdownColor

// optiminsing

//     -
//     selectTheme -= > light / dark -
//     countries -
//     searchText
//     //  -searchTextBackground color based on search text satate change the color
//     //  -searchTextplaceholodercolor
//     //  -searchTextBordercolor
//     //  -isloading-countries.length==true
//     -
//     selctregion
// //  -selectedregionBackgroudncolor props-selectTheme
// //  -cardBackgroudncolor
// //  -dashboard Backgrouncolor
// //  -dropdownColor
// optimised state:
//     =>
//     -selectTheme -= > light / dark => this state is maintained in dashboard component -
//     countries => in dashboard -
//     searchText => in dashboard -
//     selectedRegion => in dashboard


//     =>
//     -dashboard
// state
//     -
//     selectTheme -
//     countries -
//     searchText -
//     selectedRegion -
//     countriesList
// methods
//     -
//     onChangeSelectedTheme -
//     -header -
//     themeSelector -
//     props
// onChangeSelectedTheme
//     -
//     filterBar
// props - onChangeSelectedTheme -
//     mangae layouts countrysearh adn region -
//     countrySearch -
//     selectCountryRegion
// props
//     -
//     regionsList -
//     countriesList -
//     countrCard
// // -componentDidMount
// //     countriesList
// //     regionsList
