import { History } from "history";

import {
    SIGN_IN_PATH,

}
from "../../constants/RouteConstants";

export function goToSignInRoute() {
    //const {history}=this.props
    History.push(SIGN_IN_PATH);
}
