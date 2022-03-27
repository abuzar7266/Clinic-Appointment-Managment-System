import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import logo from '../assets/images/patient.png'
import {useState} from "react"







const Patient = () => {

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
                </center>
            <div>
                <table>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Age
                        </td>
                        <td>
                            21
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Gender
                        </td>
                        <td>
                            Male
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Address
                        </td>
                        <td>
                            F11/1 street 8 house 37, Islamabad
                        </td>
                    </tr>
                </table>
            </div>
            <br />
            <br />
            <br />
            
            </div>
        </div>
    )
}

export default Patient
