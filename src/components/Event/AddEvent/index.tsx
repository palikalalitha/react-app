
import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import eventObj from "../../../stores/EventStore"
import EventList from "../EventList/index"
import { EventContainer, EventInputBox, AddEventButton, TextBoxContainer } from "./styles.js"
@observer class AddEvent extends React.Component {
    @observable eventName
    @observable eventLocation
    onAddEvent = () => {
        eventObj.onAddEvent(this.eventName, this.eventLocation)
    }
    onChangeEventName = (event) => {
        if (event.keyCode === 13) {
            this.eventName = event.target.value
            //console.log(this.eventName)
        }
        this.eventName = event.target.value
    }
    onChangeEventLocation = (event) => {
        if (event.keyCode === 13) {
            this.eventLocation = event.target.value
            //console.log(this.eventLocation)
        }
        this.eventLocation = event.target.value
    }

    render() {
        const eventList = eventObj.events
        const eventsCount = eventObj.noOfEvents
        return (
            <div className="flex flex-col justify-around ">
            <EventContainer>
                <TextBoxContainer>
                    <EventInputBox placeholder="Enter name..."  onKeyDown={this.onChangeEventName}/>
                    <EventInputBox placeholder="Enter location..."  onKeyDown={this.onChangeEventLocation}/>
                </TextBoxContainer>
                <AddEventButton value="" onClick={this.onAddEvent}>Add Event</AddEventButton>
             </EventContainer>
             {eventsCount?<EventList eventsCount={eventsCount} eventList={eventList}/>:""}
            </div>)
    }

}
export default AddEvent
