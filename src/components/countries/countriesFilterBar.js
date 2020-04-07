import React from 'react'
import FilterRegions from './regionSearch.js'
import CountrySearch from './countrySearch.js'

function CountriesFilterBar(props) {
    const { searchText, selectTheme, regionsList, selectedRegion } = props
    return (
        <div className={selectTheme?"dark filterBox":'light filterBox'}>
            <CountrySearch searchText={searchText} selectTheme={selectTheme}/>
            <FilterRegions regionsList={regionsList}  selectTheme={selectTheme} selectedRegion={selectedRegion} />
            </div>
    )
}
export default CountriesFilterBar
