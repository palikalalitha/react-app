import React from 'react'
import { FilterRegions } from './regionSearch.js'
import { CountrySearch } from './countrySearch.js'
class CountriesFilterBar extends React.Component {
    render() {
        return (
            <div className={this.props.selectTheme?"dark filterBox":'light filterBox'}>
            <CountrySearch searchText={this.props.searchText} selectTheme={this.props.selectTheme} searchCountry={this.props.searchCountry}/>
            <FilterRegions regionsList={this.props.countriesList}  selectTheme={this.props.selectTheme} selectedRegion={this.props.selectedRegion} filterSelectedRegion={this.props.filterSelectedRegion}/>
            </div>
        )
    }
}
export { CountriesFilterBar }
