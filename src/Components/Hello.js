import React from 'react'
import Footer from './Footer';
import Top from './Top';
import Product from './Product';
import Click from './Click';

const Hello = () => {
    return (

        <
        div className = "Home" >
        <
        Top / >
        <
        header className = "Home-header" >

        <
        h1 > Wellcome to react < /h1>


        <
        h2 > Let 's Roll Boiss</h2>  <
        h3 > Pendejo < /h3>  <
        Product name = "BMW"
        price = "1200k" / >
        <
        Product name = "Mercedes"
        price = "1100k" / >
        <
        Product name = "Toyota"
        price = "1000k" / >
        <
        br / >
        <
        Click count = "1" > < /Click>

        <
        Footer / >
        <
        /header> 

        <
        /div>


    );
}

export default Hello;