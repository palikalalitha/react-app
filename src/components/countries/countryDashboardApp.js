import React from 'react'
import tw from 'tailwind.macro'
import CountriesFilterBar from './countriesFilterBar.js'
import { GoSync } from "react-icons/go"
import CountryCard from './countryCard.js'
import { Header } from './header.js'
//import { observable } from "mobx"
import { observer } from "mobx-react"
//import {withCountries} from "../../common/hocs/withCountries"
import themeStore from "../../stores/ThemeStore"
import { withCounries } from "../../common/hocs/withCountries.js"

//import { CountryApp, HeaderWrapper } from './styledComponents.js'
let regionsList = []
let filterList = []
@observer 
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
    getCurrenTheme = () => {
        return themeStore.selectedTheme;
    }
    onChangeTheme = () => {
        themeStore.setCurrentTheme()
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
        //console.log(this.props,this.props.countriesList)
        const { selectTheme, changeTheme } = this.props
        const { countriesList } = this.state
        return (
            <div className={this.getCurrenTheme()?"dark":"light"}>
                <div style={header} className={this.getCurrenTheme()?"dark":"light"}>
                    <Header changeTheme={this.onChangeTheme} selectTheme={this.getCurrenTheme()} />
                </div> 
                
              {this.getRegionOptions()}
            <div  style={filterBar} className={this.getCurrenTheme()?"dark":"light"}>
             <CountriesFilterBar regionsList={regionsList} selectTheme={this.getCurrenTheme()}
             searchText={this.onChangeSearchText} selectedRegion={this.onChangeSelectedRegion} />
            </div>
            
            <div className={this.getCurrenTheme()?"dark countrycard":"light countrycard"} >
                {filterList.length>0 ?
                filterList.map((item,index)=>
                    <CountryCard  countryDetails={item} allCountries={countriesList} selectTheme={this.getCurrenTheme()}/>)
                    :<h1 className="Loading"><GoSync/>Loading</h1>}
            </div>
            </div>)
    }
}
export  default CountryDashboardApp
const header = { marginBottom: "5px" }
const filterBar = { padding: "20px" }
