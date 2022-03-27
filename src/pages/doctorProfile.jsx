import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import logo from '../assets/images/logo.png'
import {useState} from "react"







const Customers = () => {

const[name,setname]=useState("Haroon Riasat");
const[speciality,setSpeciality]=useState("Cardiologist");
const[degree,setDegree]=useState("MBBS");
const[rating,setRating]=useState(5);
    return (
        <div className='col-4 col-md-6'>
            <div className='card'>
                <center>
                <img src={logo} alt="company logo" />
            <br/>
                {name}
                <br />
              {degree}   {speciality}
                <br/>
                    {rating}
                </center>
                </div>
     
        </div>
    )
}

export default Customers
