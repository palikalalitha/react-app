import React from "react";
import styled from '@emotion/styled'
import Page from './styledComponents.js'
import logo from "../../logo.svg";
//import tw from 'tailwind.macro'

const page1Container = styled.div `
 display:"flex";
    height: "100vh";
    //justify-content:"center";`



function Page1() {

    return (
        <Page>
    {/*<div className="bg-gray-800 h-screen flex justify-center items-center flex flex-col">*/}
    <img src={logo} className="App-logo w-3/12" alt="logo" />
    <h1 className="text-white">Page 1</h1>
    </Page>)
}

export default Page1;
