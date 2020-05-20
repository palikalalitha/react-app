import React from "react"
import {observable} from "mobx";
import {observer} from "mobx-react"

function withCounries(WrappedComponent)
{
    @observer
    class FetchingData extends React.Component
    {
        @observable countriesList 
        constructor()
        {
            super()
            this.countriesList=[]
        }
        async componentDidMount() {
            try {
                let response = await fetch("https://restcountries.eu/rest/v2/all ")
                let data = await response.json()
                // this.setState({
                //     countriesList: data,
                // });
                this.countriesList=data
                filterList = data
            }
            catch (error) {
                alert("Loading error")
            }
        }

        render()
        {

            return (<WrappedComponent {...this.props} 
                countriesList={this.countriesList}/>)
           }
    }
    return FetchingData
}
export {withCounries}