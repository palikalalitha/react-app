import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const BackButtonWrapper = styled.div `${tw`mt-5 ml-5 w-24 h-16 pt-3`}`

const BackArrowImagElement = styled.span `${tw`m-px text-xl `}`

const CountryDetailsWrapper = styled.div `${tw`mt-1  flex justify-around`}`

const CountryImage = styled.img `${tw`w-1/3 h-64  m-5 object-cover bg-pink-400 rounded-t-md rounded-b-md`}`

//>>>>>>>Search styles>>>>>
const SearchBox = styled.div `${tw`ml-1 w-56 h-12 flex` }
background-color:${props=>props.id?"#3b4e5e":"#fff"};
color:${props=>props.id?"white":"black"};
box-shadow:${props=>props.id?"0 1px 1px #3b4e5e":"0 3px 3px silver"}`;

const SearchBar = styled.input `${tw`hover:border-transparent`}
background-color:${props=>props.id?"#3b4e5e":"#fff"}`


const SearchIcon = styled.h3 `${tw`mt-4 ml-4 mr-1`}`


//>>>>>>Header styles>>>>
const Theme = styled.div `
${tw`flex items-center `}`

const NavBar = styled.div `${tw`flex justify-between items-center h-16 p-6`}
backgroundColor:${props=>props.id?"#3b4e5e":"pink"};
color:${props=>props.id?"white":"black"};
box-shadow:${props=>props.id?"0 8px 6px -6px black":"0 9px 6px -6px silver"}`

const ThemeButton = styled.button `${tw`border-none text-lg m-px`}
color:${props=>props.id?"white":"black"};`


export { Theme, BackArrowImagElement, NavBar, ThemeButton, BackButtonWrapper, CountryDetailsWrapper, CountryImage, SearchBar, SearchIcon, SearchBox }

// .dark {
//     background-color: #2b3945;
//     color: white;
// }

// .light {
//     background-color: #fff;
//     color: black
// }

// const darkTheme = {
//     border: "none",
//     fontSize: "15px",
//     color: "white"
// }
// const lightTheme = {
//     border: "none",
//     fontSize: "15px",
//     color: "black"
// }
// navBarDarkMode {
//     height: 70px; h-16 =>64px h-20=>
//     display: flex;
//     justify-content: space-between;
//     background-color: #3b4e5e;
//     align-items: center;
//     color: white;
//     padding-left: 25px;=>p-6
//     box-shadow: 0 8px 6px -6px black;
// }

// .navabarLightMode {
//     height: 70px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-left: 25px;
//     box-shadow: 0 8px 6px -6px silver;
// }

// const darkMode = {
//     marginLeft: "4px",
//     display: "flex",
//     width: "200px",
//     height: "50px",
//     backgroundColor: "#3b4e5e",
//     color: "white",
//     boxShadow: "0 3px 3px #3b4e5e",
// }
// .searchbarDarkMode {
//     border: none;
//     background-color: #3b4e5e;
// }

// .searchbarLightMode {
//     border: none;
//     background-color: #fff;

// }
// width: "280px",
// height: "250px",

// margin: "20px",
// borderRadius: "5px 5px 0px 0px",
// objectFit: "cover"


// marginTop: "30px", mt-8 =>32px 2rem  mt-6 ==>24px 1.5rem
// margin:"20px" m-5 =>1.25rem  20px
//borderRadius :"5px 5px"=>top-left ,top-right rounded-t-md=>0.375rem
//borderRadius:""
//   
//     display: "flex",
//     justifyContent: "space-around",
// const lightMode = {
//     marginLeft: "4px",
//     backgroundColor: "white",
//     color: "black",
//     display: "flex",
//     width: "200px",
//     height: "50px",
//     boxShadow: "0 3px 3px silver",
// }
