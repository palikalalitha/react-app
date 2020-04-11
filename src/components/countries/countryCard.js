import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer } from "mobx-react"

import themeStore from "../../stores/ThemeStore"

class CountryCard extends React.Component {
    navigateToCountryDetailsPage = () => {
        let { history, countryDetails } = this.props
        history.push(`/projects/countryDashboard/details/${countryDetails.alpha3Code}`, countryDetails)
    }
    render() {
        // const selectTheme = this.getCurrenTheme()
        const { countryDetails, selectTheme } = this.props
        return (
            <div onClick={this.navigateToCountryDetailsPage} style={selectTheme?cardDarkMode:cardLightMode} >
                            <img src={countryDetails.flag} style={countryImgStyles}  alt="country"/>
                            <h2 style={fontStyles}><b>{countryDetails.name}</b></h2>
                            <p ><span><b>Population:</b></span>{countryDetails.population}</p>
                            <p ><span><b>Region:</b></span>{countryDetails.region}</p>
                            <p><span><b>Capital:</b></span>{countryDetails.capital}</p>
                    </div>)
    }

}

export default withRouter(CountryCard)

const countryImgStyles = {
    width: "220px",
    height: "180px",
    borderRadius: "5px 5px 0px 0px",
    objectFit: "cover",
}
const fontStyles = {
    margin: "10px",
}
const cardDarkMode = {
    margin: "15px",
    width: "220px",
    height: "400px",
    backgroundColor: "#3b4e5e",
    borderRadius: "10px",
    boxShadow: "#3b4e5e 0 0 10px"
}
const cardLightMode = {
    margin: "15px ",
    width: "220px",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "silver 0 0 10px"
}
