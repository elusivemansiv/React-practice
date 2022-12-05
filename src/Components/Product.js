import React from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const Product = (props) => {
    return (

        <
        div >
        <
        br / >
        <
        Table striped bordered hover >
        <
        thead >
        <
        tr >

        <
        th > Product Name < /th> <
        th > Product Price < /th> <
        /tr> <
        /thead> <
        tbody >
        <
        tr >

        <
        td > { props.name } < /td> <
        td > { props.price } < /td>

        <
        /tr>


        <
        /tbody>


        <
        /Table>

        <
        /div>
    )
}
export default Product;