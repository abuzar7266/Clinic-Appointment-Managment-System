
import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import logo from '../assets/images/logo.png'
import {useState} from "react"







const Appointment = () => {
    return (
        <div className='col-5 col-md-10'>
        {
            (<div className='card'>
                <center>
                    <h3>
                        Scheduled Appointment
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
                                Date
                            </th>
                            <th>
                                Time
                            </th>
                        </tr>
                        <tr className='alert' id='2'>
                            <td>
                                A0087232B
                            </td>
                            <td>
                                Haroon Riasat
                            </td>
                            <td>
                                04-JAN-2021
                            </td>
                            <td>
                                01:00 PM
                            </td>
                        </tr>
                        <tr className='alert' id='2'>
                            <td>
                                A0087232B
                            </td>
                            <td>
                                Haroon Riasat
                            </td>
                            <td>
                                04-JAN-2021
                            </td>
                            <td>
                                01:00 PM
                            </td>
                        </tr>
                    </table>
                </center>
            </div>)}
        </div>
    )
}
export default Appointment
