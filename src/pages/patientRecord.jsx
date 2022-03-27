
import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import logo from '../assets/images/logo.png'
import {useState} from "react"







const Appointment = () => {

   
const[date,setDate]=useState("01-JAN-1999");
const[status,setStatus]=useState("U");
const[did,setDid]=useState("21");
const[aid,setAid]=useState("12");
const [state,setState]=useState(0)
const showPatient = () => {
    setState(1)
}
const back = ()=>{
    setState(state-1)
}
    return (
        <div className='col-5 col-md-10'>
        {
            state>0 && (<div><button onClick={()=>{back()}}>Back</button><br /></div>)}
            { state==0 && (<div className='card'>
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
                                Patient
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Time
                            </th>
                        </tr>
                        <tr className='alert' id='2' onClick={()=>{showPatient()}} style={{cursor:'pointer'}}>
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
                        <tr className='alert' id='2' onClick={()=>{showPatient()}} style={{cursor:'pointer'}}>
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
            {
                state==1 && (<div className='card'>
                    <center>
                        <div>
                           <h3>
                           Haroon's Information
                           </h3>
                        </div>
                    </center>
                    <div>
                       <table>
                           <tr className='alert'>
                               <td>
                                   Age
                               </td>
                               <td>
                                   28
                               </td>
                           </tr>
                           <tr className='alert'>
                               <td>
                                   Mobile
                               </td>
                               <td>
                                   +923167815023
                               </td>
                           </tr>
                           <tr className='alert'>
                               <td>
                                   Gender
                               </td>
                               <td>
                                   MALE
                               </td>
                           </tr>
                           <tr className='alert'>
                               <td>
                                   Email Address
                               </td>
                               <td>
                                   abuzar.m7266@gmail.com
                               </td>
                           </tr>
                           <tr className='alert'>
                               <td>
                                   Rated
                               </td>
                               <td>
                                   3.0
                               </td>
                           </tr>
                           <tr className='alert'>
                               <td>
                                   Summary
                               </td>
                               <td>
                                   Patient had cardiovascular diseases
                               </td>
                           </tr>
                       </table>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Appointment
