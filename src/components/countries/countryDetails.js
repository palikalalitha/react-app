import React from 'react'
import { withRouter } from 'react-router-dom'
import { TiArrowLeft } from 'react-icons/ti';
class CountryDetails extends React.Component {
    getBorderDetails = (list) => {
        let { history } = this.props
        let { allCountries } = this.props.history.location.state
        history.push(`/projects/countryDashboard/details/${list.alpha3Code}`, { list, allCountries })

    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        let { list, allCountries } = this.props.history.location.state
        let obj = allCountries.filter(each => each.name === list.name)
        let state = obj[0]
        return (
            <div style={{margin:"0px",paddingLeft:"15px"}} className={this.props.selectTheme?"dark":'light'}>
                <div>
                    <div style={backButton}>
                        <h3 onClick={this.goBack} style={this.props.selectTheme?backBtnDarkMode:backBtnLightMode}><TiArrowLeft/>Back</h3>
                    </div>
                    <div style={countryBox}>
                        <img src={state.flag} style={img} alt="img" width="250px" height="250px"/>
                        <div style={{padding:"10px"}}>
                            <h2 style={{margin:"0px"}}>{state.name}</h2>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <div >
                                    <p><b>Native Name: </b>{state.nativeName}</p>
                                    <p><b>Population: </b>{state.population}</p>
                                    <p><b>Region: </b>{state.region}</p>
                                </div>
                                <div>
                                    <p><b>Top Level Domain: </b>{state.topLevelDomain}</p>
                                    <p><b>Currencies: </b>{state.currencies.map((item,index)=><span>{item.name}</span>)}</p>
                                    <p><b>Languages: </b>{state.languages.map((item,index)=><span style={{margin:"10px"}}>{item.name},</span>)}</p>
                                    </div>
                            </div>
                            <p><b>Sub Region: </b>{state.subregion}</p>
                            <p><b>Capital: </b>{state.capital}</p>
                              <div>
                           <p><b>Border Countries:</b>
                            <div style={bordersBox} >{state.borders.map(item1=>
                            allCountries.map((item,index)=>
                            (item.alpha3Code===item1?
                            <button style={this.props.selectTheme?borderBtnDarkMode:borderBtnLightMode} onClick={()=>this.getBorderDetails(item)}>{item.name}</button>:"")))}
                           </div>
                            </p>
                        </div>
                           </div>
                         


                    </div> 

                </div>
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
    height: " 30px",
    backgroundColor: "#3b4e5e",
    boxShadow: "0 2px 2px #4b5661",
    border: "none",
    color: "white",
    fontSize: "13px"
}
const borderBtnLightMode = {
    margin: " 5px 10px",
    height: "30px",
    boxShadow: "0 2px 2px silver",
    border: "none",
    fontSize: "13px"
}

const img = {

    objectFit: "cover"
}
const countryBox = {
    display: "flex",
    justifyContent: "space-around",
    //flexWrap: "wrap"
}
const backBtnDarkMode = {
    color: "white",
    backgroundColor: "#3b4e5e",
    boxShadow: "0 2px 2px #4b5661",
    padding: "10px"
}
const backBtnLightMode = {
    boxShadow: "0 2px 5px silver",
    padding: "10px"
}
const backButton = {
    width: "100px",
    height: "100px",
    paddingLeft: "20px"
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
//     console.log(id)
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
