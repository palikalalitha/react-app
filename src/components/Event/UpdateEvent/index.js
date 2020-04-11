import React from "react"
import { observable } from "mobx"
import { EventListContainer, EventBox, EventInputBox, EditEventButton, AddEventButton, TextBoxContainer } from "./styles.js"
import { observer } from "mobx-react"
@observer class Event extends React.Component {
    @observable isEditEvent = false
    @observable eventName = this.props.eventName
    @observable eventLocation = this.props.eventLocation
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
    onUpdateEventDetails = () => {

    }
    render() {
        const { event, editStatus, eachEvent } = this.props
        console.log(event, editStatus)
        return (
            <div>Event updation
             {/*{editStatus?<EventListContainer>
                <TextBoxContainer>
                    <EventInputBox placeholder="Enter name..." value={this.eventName}  onKeyDown={this.onChangeEventName}/>
                    <EventInputBox placeholder="Enter location..."   value={this.eventLocation}  onKeyDown={this.onChangeEventLocation}/>
                </TextBoxContainer>
                <AddEventButton value="" onClick={this.onUpdateEventDetails}>Update Event</AddEventButton>
             </EventListContainer>:""}*/}
                <EventListContainer >
                    <TextBoxContainer>
                        <EventBox>Event Name: {eachEvent.eventName}</EventBox>
                        <EventBox>Event Location: {eachEvent.eventLocation}</EventBox>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <EditEventButton onClick={this.onUpdateEvent}value={eachEvent}>Edit</EditEventButton>
                        <EditEventButton onClick={this.onDeleteEvent}>Delete</EditEventButton>
                    </TextBoxContainer>
                </EventListContainer>
            </div>)
    }

}
export default Event
