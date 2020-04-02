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
        let regionsList = this.props.regionsList
        return (
            regionsList.map(item => item !== "" ? <option value={item}>{item}</option> : "")
        )
    }
    render() {
        return (
            <div>
            <select style={this.props.selectTheme?darkMode:null} onChange={this.onChangeFilterRegions}>
                <option value="all">All</option>
                {this.renderRegions()} 
            </select>
            </div>
        )
    }
}
export { FilterRegions }
