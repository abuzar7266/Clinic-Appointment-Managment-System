
import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import logo from '../assets/images/logo.png'
import {useState} from "react"
var schedule = {
    monday:[{
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    }],
    tuesday:[{
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    }],
    wednesday:[{
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    }],
    thursday:[{
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    }],
    friday:[{
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    }],
    saturday:[{
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    }],
    sunday:[{
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:0
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    },
    {
        'start':'01:00 PM',
        'end':'02:00 PM',
        status:1
    }]
}
const Appointment = () => {
    return (

        <div className='col-8 col-md-10'>
        <div className='card'>
                <center>
                    <h3>
                        Appointment History
                    </h3>
                    <table>
                        <tr className='alert' id='1'>
                            <th>
                                Appointment#
                            </th>
                            <th>
                                Doctor
                            </th>
                            <th>
                                Speciality
                            </th>
                            <th>
                                Rating
                            </th>
                            <th>
                                Experience
                            </th>
                            <th>
                                Time
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Feedback
                            </th>
                        </tr>
                        <tr className='alert' id='1'>
                            <th>
                            1B7FGH
                            </th>
                            <th>
                            Haroon Riasat
                            </th>
                            <th>
                            Cardiologist
                            </th>
                            <th>
                                4.5
                            </th>
                            <th>
                                4+ Years
                            </th>
                            <th>
                                01:00 PM
                            </th>
                            <th>
                                01-Jan-2021
                            </th>
                            <th>
                                Provide Feedback
                            </th>
                        </tr>
                        <tr className='alert' id='1'>
                            <th>
                                1B7FDS
                            </th>
                            <th>
                                Muaaz Amir
                            </th>
                            <th>
                                Psychiatrist
                            </th>
                            <th>
                                4.0
                            </th>
                            <th>
                                20+ Years
                            </th>
                            <th>
                                10:00 PM - 4:00 PM
                            </th>
                            <th>
                                02-MAY-2019
                            </th>
                        </tr>
                    </table>
                </center>
            </div>
        </div>
    )
}
export default Appointment
