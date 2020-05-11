import React from 'react'
import { withRouter } from 'react-router-dom'
import { observable } from "mobx"
import { observer } from "mobx-react"
import { TiArrowLeft } from 'react-icons/ti';

import themeStore from "../../stores/ThemeStore"
import { Header } from './header'
//import themeStore from "../stores/ThemeStore"
import { BackButtonWrapper, BackArrowImagElement, CountryDetailsWrapper, CountryImage } from './styledComponents'


@observer

class CountryDetails extends React.Component {
    state = {
        countriesList: []
    }
    async componentDidMount() {
        try {
            let response = await fetch("https://restcountries.eu/rest/v2/all ")
            let data = await response.json()
            this.setState({
                countriesList: data
            });
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
    getBorderDetails = (countryDetails) => {
        let { history } = this.props
        history.push(`/projects/countryDashboard/details/${countryDetails.alpha3Code}`, countryDetails)

    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        const selectTheme=this.getCurrenTheme()
        const { changeTheme } = this.props
        const { state } = this.props.history.location
        const allCountries = this.state.countriesList
        return (
            <div className={selectTheme?"dark countryDetailsCard":'light countryDetailsCard'}>
                <Header changeTheme={this.onChangeTheme} selectTheme={selectTheme} />
                <BackButtonWrapper>
                        <h3 onClick={this.goBack} style={selectTheme?backBtnDarkMode:backBtnLightMode}>
                        <BackArrowImagElement><TiArrowLeft/></BackArrowImagElement>Back
                        </h3>
                </BackButtonWrapper>
                <CountryDetailsWrapper>
                        <CountryImage src={state.flag}  alt="img"/>
                        <div>
                            <div>
                                <h4 style={countryStyle}><b>{state.name}</b></h4>
                                <div style={contentBox}>
                                    <div>
                                        <p><b>Native Name: </b>{state.nativeName}</p>
                                        <p><b>Population: </b>{state.population}</p>
                                        <p><b>Region: </b>{state.region}</p>
                                    </div>
                                    <div>
                                        <p><b>Top LevelDomain: </b>{state.topLevelDomain}</p>
                                        <p><b>Currencies: </b>{state.currencies.map((item,index)=><span>{item.name}</span>)}</p>
                                        <p><b>Languages: </b>{state.languages.map((item,index)=><span style={languages}>{item.name},</span>)}</p>
                                        </div>
                                </div>
                                <div>
                                    <p><b>Sub Region: </b>{state.subregion}</p>
                                    <p><b>Capital: </b>{state.capital}</p>
                                    <p><b>Border Countries:</b></p>
                                </div>
                            </div>
                            <div>
                                <div style={bordersBox}>
                                        {state.borders.map(eachBorder=>allCountries.map(eachCountry=>
                                        (eachCountry.alpha3Code===eachBorder?
                                        <button style={selectTheme?borderBtnDarkMode:borderBtnLightMode} onClick={()=>this.getBorderDetails(eachCountry)}>{eachCountry.name}</button>:"")))}
                                </div>
                            </div>
                        
                        </div>
                    </CountryDetailsWrapper>
            </div>)
    }
}



export default withRouter(CountryDetails)
const bordersBox = {
    display: "flex",
    flexWrap: "wrap"
}
const borderBtnDarkMode = {
    margin: "5px 10px",
    height: "40px",
    padding: "10px",
    backgroundColor: "#3b4e5e",
    boxShadow: "0 2px 2px #4b5661",
    border: "none",
    color: "white",
    fontSize: "13px"
}
const borderBtnLightMode = {
    margin: "5px 10px",
    height: "40px",
    padding: "10px",
    boxShadow: "0 2px 2px silver",
    border: "none",
    fontSize: "13px"
}
const countryBox = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-around",
    //flexWrap: "wrap"
}
const backBtnDarkMode = {
    display: "flex",
    color: "white",
    backgroundColor: "#3b4e5e",
    boxShadow: "0 2px 2px #4b5661",
    padding: "10px",
    //marginTop: "10px"
}
const backBtnLightMode = {
    display: "flex",
    boxShadow: "0 2px 5px silver",
    padding: "10px"
}
const BackArrow = {

}
const countryStyle = {
    ///paddingLeft: "10px",
    margin: "10px"
}
const contentBox = {
    display: "flex",
    justifyContent: "space-between",
    //margin: "10px"
}
const languages = {
    margin: "10px"
}
// <p>{this.state.countryDetails.topLevelDomain}</p>
//             <p>{this.state.countryDetails.currencies}</p>
//    
//     {this.state.countryDetails.currencies.map((item,index)=>
//     <p key={index}>{item}</p>)}
//   <p>{this.state.countryDetails.language}</p>
// constructor(props) {
//     super(props)
//     this.state = {
//         countriesList: "",
//         countryDetails: "",

//     }
// }
// componentDidMount() {
//     let { id } = this.props.match.params
//  
//     let country = []
//     fetch("https://restcountries.eu/rest/v2/all ")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     countriesList: result,
//                 });
//                 this.state.countriesList.map(item => item.alpha3Code === id ? country = item : "")
//                 this.setState({
//                     countryDetails: country
//                 })
//             })
//         .catch(error => {
//             alert("Loading error")
//         })
// }
// renderLanguages = () => {
//     return (
//         this.state.countryDetails.languages.map(item =>
//             <p>{item.name}</p>)
//     )
// }

//         {this.renderLanguages()}
//     {this.state.countryDetails.currencies.map((item,index)=>
// <p key={index}>c{item.name}</p>)}
//3b4e5e
// componentDidMount() {
//     // let { id } = this.props.match.params
//     fetch("https://restcountries.eu/rest/v2/all ")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     countriesList: result,
//                 });
//             })

//         .catch(error => {
//             alert("Loading error")
//         })

// }
