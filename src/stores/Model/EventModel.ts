import { observable, action } from "mobx"
class EventModel {
    id
    @observable eventName
    @observable eventLocation
    constructor(event) {
        this.id = event.id
        this.eventName = event.eventName
        this.eventLocation = event.eventLocation
    }
    @action.bound
    onUpdateEventDetails() {

    }
}
export default EventModel
