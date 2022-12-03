import React from 'react'
import { Link } from 'react-router-dom';

const Top = () => {
    return ( <
        div className = "Top" >

        <
        Link to = "/" > Index < /Link>&nbsp;&nbsp; <
        Link to = "/profile" > Profile < /Link>&nbsp;&nbsp; <
        Link to = "/product" > Product < /Link>&nbsp;&nbsp;

        <
        /div> 
    )
}
export default Top;