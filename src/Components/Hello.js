import React from 'react'
import Footer from './Footer';
import Top from './Top';
import Product from './Product';

function Hello() {
    return (

        <div className = "Home" >
        <Top/>
        <header className = "Home-header" >

        <h1>Wellcome to react </h1>

        <h3 > dear 123 s m shahriar </h3>

        <h2 > Let 's Roll Boiss</h2> 
        <h3 > Pendejo </h3> 
        <Product name = "BMW" price = "1200k" / >
        <Product name = "Mercedes" price = "1100k" / >

        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        This is New App </a> <
        Footer / >
        </header> 
        </div>


    );
}

export default Hello;