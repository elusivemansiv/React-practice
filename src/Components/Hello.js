import React from 'react'
import Footer from './Footer';
import Top from './Top';
import Product from './Product';
import Click from './Click';
import Index from './Index';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Hello = () => {
    return (

        <
        div className = "Home" >

        <
        header className = "Home-header" >
        <
        Router >
        <
        Top / >

        <
        Switch >
        <
        Route exact path = "/" > < Index / > < /Route>

        <
        Route exact path = "/profile" > < Profile / > < /Route>

        <
        Route exact path = "/product" >
        <
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
        Click count = "1" > < /Click> <
        /Route>

        <
        /Switch> <
        Footer / >
        <
        /Router>








        <
        /header> 

        <
        /div>


    );
}

export default Hello;