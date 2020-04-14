import { observable, action, computed } from "mobx"
import EventModel from "../Model/EventModel"
class EventStore {
    @observable events = []
    @action.bound
    onAddEvent(name, location) {
        this.eventObj = {
            id: Date.now(),
            eventName: name,
            eventLocation: location
        }
        let event = new EventModel(this.eventObj)
        this.events.push(event)
    }
    @action.bound
    onDeleteEvent() {

    }
    @computed get noOfEvents() {
        return this.events.length
    }

}
const eventObj = new EventStore()
export default eventObj
