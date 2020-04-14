country dashboard app
missing points
cleaner code
    => destructing objects
for more readbaility {} => differneces between children routes as props
In Router app.js <
    Route path = "/"
children = { <Home/> } > it is one of the way to excute components

    => theme used as an object insted uing string

selectTheme = {
    id: 0,
    name: 'light'
    bgClassName: "white",
}
<div className={bgclassName}/>
destructing =>
    const { selectTheme: bgClassName } = this.props

    => countries list component does not contain more than one

state = {
    countries: [],
    //searchCountries:[],
    //filterCountries:[]
}
In filter use(includes) insted of using ===


    => how to use functional components and class components -
    >
    class components

    => countries details componets null
countryDetails: null -
    >
    prefer to assign null to countryDetails varibles

    => warning and errors are important to solving

    => UI is imp margins, padding....

    => only one class components per file

    => loader can be abstracted out as separate component

    =>
    export default used
for one file
for multiple componets use {}

=> Error Handling
    -
    > filtering countries using find[doubt] -
    >
    throw error
if user enter differnt country that is not list
    -
    > regions must be added dynamically -
    > handle every error in render fn => async aand wait more readbke ode => component folder structure[doubt]

    => dont use history object state[doubt]

    => dont use inline styles - separting files reUsability

    => use region options as class property


User Persepective

    => search bar spaces - alert - give valid text

    => stickey header
while scrolling countries

    => data updations - > notifications

    =>
    while loading search bar wiil be disable

    => filters should be persisted

    => display not found
for invalid data

    => animation effects

    => auto suggestions

    => cross mark

    => history of search in dropdown

    => onchangeseahtext should filter dynamically

    => show onlyy 4 countries
for 2 g users
only show dataa not images
    => lazyy loading technique
