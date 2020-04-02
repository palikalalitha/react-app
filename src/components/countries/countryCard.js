import React from 'react'
import { withRouter } from 'react-router-dom'

class CountryCard extends React.Component {
    navigateToCountryDetailsPage = () => {
        let { history, list, allCountries } = this.props
        history.push(`/projects/countryDashboard/details/${list.alpha3Code}`, { list, allCountries })
    }
    render() {
        return (
            <div onClick={this.navigateToCountryDetailsPage} style={this.props.selectTheme?darkMode:lightMode} >
                    <img src={this.props.list.flag} style={countryImgStyles}  alt="country"/>
                    <h3 style={fontStyles}>{this.props.list.name}</h3>
                    <p><span style={fontStyles}>Population:</span>{this.props.list.population}</p>
                    <p><span style={fontStyles}>Region:</span>{this.props.list.region}</p>
                    <p><span style={fontStyles}>Capital:</span>{this.props.list.capital}</p>
                </div>
        )
    }

}
export default withRouter(CountryCard)
const countryImgStyles = {
    width: "200px",
    height: "180px",
    borderRadius: "15px 15px 0px 0px",
    objectFit: "cover",
}
const fontStyles = {
    marginLeft: "15px",
    fontWeight: "bold",
    fontSize: "17px"
}
const darkMode = {
    margin: "25px",
    width: "200px",
    height: "400px",
    backgroundColor: "#3b4e5e",
    borderRadius: "15px",
    boxShadow: "grey 0 0 10px"
}
const lightMode = {
    margin: "25px ",
    width: "200px",
    height: "400px",
    borderRadius: "15px",
    boxShadow: "silver 0 0 10px"
    //boxShadow: "8px 8px 4px 4px grey"
}
