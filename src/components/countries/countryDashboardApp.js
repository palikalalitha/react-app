import { Header } from './header.js'
import React from 'react'
import { TiArrowSync } from 'react-icons/ti'
import { CountriesFilterBar } from './countriesFilterBar.js'
import CountryCard from './countryCard.js'
let countries = []
let regionsList = []
class CountryDashboardApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            countriesList: [],
            dummyCountriesList: [],
            countries: [],
            searchText: "",
            selectedRegion: "all",
            regionsList: [],
        }
    }
    getCountries() {
        //       let response=await ("https://restcountries.eu/rest/v2/all")
        //     let data=await response.json();
    }
    componentDidMount() {

        fetch("https://restcountries.eu/rest/v2/all ")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        countriesList: result,
                        dummyCountriesList: result,
                        isLoaded: true
                    });
                    this.state.countriesList.map(item => { countries.push(item.name) })
                    this.setState({
                        countries
                    })

                })
            .catch(error => {
                alert("Loading error")
            })
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
    combinationSearch = (countryName, countryRegion) => {
        if (countryName === "" && countryRegion === "all") {
            this.setState({
                dummyCountriesList: this.state.countriesList
            })
        }
        else if (countryName !== "" && countryRegion !== "all") {
            let countriesNames = this.state.countriesList.filter(eachCountry => eachCountry.name.toLowerCase().search(countryName.toLowerCase()) !== -1)
            let result = countriesNames.filter(eachRegion => eachRegion.region === countryRegion)
            this.setState({
                dummyCountriesList: result
            })
        }
        else if (countryName !== "" && countryRegion === "all") {
            let searchResults = this.state.countriesList.filter(eachCountry => eachCountry.name.toLowerCase().search(countryName.toLowerCase()) !== -1)
            this.setState({
                dummyCountriesList: searchResults
            })
        }
        else if (countryName === "" && countryRegion !== "all") {
            let searchResults = this.state.countriesList.filter(eachCountry => eachCountry.region.toLowerCase().search(countryRegion.toLowerCase()) !== -1)
            this.setState({
                dummyCountriesList: searchResults
            })
        }
    }
    filterCountriesBySearchText = (userInput) => {
        let countryRegion = this.state.selectedRegion
        this.combinationSearch(userInput, countryRegion)
    }
    filterSelectedRegions = (userInput) => {
        let countryName = this.state.searchText
        this.combinationSearch(countryName, userInput)
    }
    getRegionOptions = () => {
        let countriesData = this.state.countriesList
        regionsList = [...new Set(countriesData.map(item => item.region))]
    }
    render() {
        return (
            <div>
                {this.getRegionOptions()}
                <div style={{margin:"5px",padding:"20px"}} className={this.props.selectTheme?"dark":"light"}>
                <CountriesFilterBar countriesList={regionsList} selectTheme={this.props.selectTheme} filterSelectedRegion={this.filterSelectedRegions} selectTheme={this.props.selectTheme} countries={this.state.countries} filterRegions={this.filterBySelectedRegion} searchText={this.onChangeSearchText} selectedRegion={this.onChangeSelectedRegion} searchCountry={this.filterCountriesBySearchText}/>
                </div>
                <div className={this.props.selectTheme?"dark countrycard":"light countrycard"} >
                {this.state.dummyCountriesList.length>0 ?this.state.dummyCountriesList.map((item,index)=>
                    <CountryCard  list={item} allCountries={this.state.countriesList} selectTheme={this.props.selectTheme}/>):<h2 style={{textAlign:"center",width:"100%"}}><TiArrowSync/>Loading....</h2>}
                </div>
        </div>)
    }
}
export { CountryDashboardApp }













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
