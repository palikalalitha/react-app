import { getAccessToken } from "./StorageUtils.js"
export const isLoggedIn = () => {
    const token = getAccessToken()
    console.log(token)
    return token !== undefined
}
