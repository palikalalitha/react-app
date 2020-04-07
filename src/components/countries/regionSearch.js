import React from 'react'
const darkMode = {
    color: "white",
    fontSize: "15px"
}
class FilterRegions extends React.Component {
    onChangeFilterRegions = (event) => {
        this.props.selectedRegion(event.target.value)
    }
    renderRegions = () => {
        let { regionsList } = this.props
        return (
            regionsList.map(item => <option key={item} value={item}>{item}</option>)
        )
    }
    render() {
        const { selectTheme } = this.props
        return (
            <div>
            <select style={selectTheme?darkMode:null} onChange={this.onChangeFilterRegions}>
                <option value="all">All</option>
                {this.renderRegions()} 
            </select>
            </div>
        )
    }
}
export default FilterRegions
