import React from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import Event from "../UpdateEvent/index"
@observer class EventList extends React.Component {
    @observable updateStatus = false
    @observable eventObj
    onUpdateEvent = () => {
        const { eventList } = this.props
        this.eventObj = eventList
        this.updateStatus = !this.updateStatus
    }
    render() {
        const { eventList, eventsCount } = this.props
        return (
            <div>
            <h1>Number of Events: {eventsCount}</h1>
                <div>
                {eventList.map(eachEvent=>
                <Event key={eachEvent.id} eachEvent={eachEvent}/>)}
                </div>
            </div>)
    }

}
export default EventList
