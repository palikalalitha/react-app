problem => no need to check getAccessToken every time in render
solution create ProtectedRoute in clean way

creation
path components - <ProtectedRoute->functional component

create authutils.js in utils folder
    export const isLoggedIn = () => {
        const tokn = getAccessToken()
        return token !== undefined
    }
use ProtectedRoute in app.js import and use 
<ProtectedRoute exact path={PRODUCTS_PATH} component={Products_Page}/>


problem=>onCLickSignin 
 
solution  user async
    authStore.userLogin(
    {
        username:this.username
    }.this.onSuccess,this.onFailure)
    
    in store use the method userLogin(request,succes,failure)
    
add authuitls=>isloggedin
 
problem =>differences between redirect and push
user cases dashboard-login user both
solution=> better to use redirect

problem =>differences between signinRoute and signinComponents
solution

rouets->signinRoute
