import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
    return ( <
        div >
        <
        br / >

        <
        Carousel >
        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357__480.jpg"
        alt = "First slide" /
        >
        <
        Carousel.Caption >
        <
        h3 > First slide label < /h3> <
        p > Nulla vitae elit libero, a pharetra augue mollis interdum. < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://media.istockphoto.com/id/1167217673/photo/multi-color-wooden-fishing-boat-on-the-shore-in-cox-bazar-sea-beach-of-bangladesh.jpg?s=612x612&w=0&k=20&c=T2svdWqzu22orJaMJQJ4_l-L0dSa8-ApV8K2b2PjYYo="
        alt = "Second slide" /
        >

        <
        Carousel.Caption >
        <
        h3 > Second slide label < /h3> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y294JTIwYmF6YXJ8ZW58MHx8MHx8&w=1000&q=80"
        alt = "Third slide" /
        >

        <
        Carousel.Caption >
        <
        h3 > Third slide label < /h3> <
        p >
        Praesent commodo cursus magna, vel scelerisque nisl consectetur. <
        /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        /Carousel>

        <
        /div>
    )
}
export default Index;