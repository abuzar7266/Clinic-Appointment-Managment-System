
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
    const [state,setState]=useState(0);
    const [day,setDay]=useState('Monday');
    const filterList = () =>{
        setState(1);
    }
    const searchDoc = () =>{
        setState(0);
    }
    const cancelFilter = () =>{
        setState(0);
    }
    const openProfile = () =>{
        setState(2);
    }
    const bookOn = ()=>{
        setState(3);
    }
    const confirmAppointment = () =>{
        window.location = 'http://localhost:3000/find'
    }
    return (

        <div className='col-5 col-md-10'>
        {

            state==0 && (<div className='card'>
                <center>
                    <h3>
                        Doctor List
                    </h3>
                    <button onClick={()=>{filterList()}}>Filter</button><br /><br />
                    <table>
                        <tr className='alert' id='1'>
                            <th>
                                Name
                            </th>
                            <th>
                                Speciality
                            </th>
                            <th>
                                Degree
                            </th>
                            <th>
                                Rating
                            </th>
                            <th>
                                Experience
                            </th>
                        </tr>
                        <tr className='alert' id='2' onClick={()=>{openProfile()}} style={{cursor:'pointer'}}>
                            <td>
                                Haroon Riasat
                            </td>
                            <td>
                                Cardiologist
                            </td>
                            <td>
                                MBBS
                            </td>
                            <td>
                                4.3
                            </td>
                            <td>
                                4 Years
                            </td>
                        </tr>
                        <tr className='alert' id='2' onClick={()=>{openProfile()}} style={{cursor:'pointer'}}>
                            <td>
                                Haroon Riasat
                            </td>
                            <td>
                                Cardiologist
                            </td>
                            <td>
                                MBBS
                            </td>
                            <td>
                                4.3
                            </td>
                            <td>
                                4 Years
                            </td>
                        </tr>
                    </table>
                </center>
            </div>)}
            {state==1 && (<div className='card'>
                <center>
                    <div>
                        <h3>
                            Filter Doctor
                        </h3>
                    </div>
                </center>
                <div>
                    <table>
                        <tr>
                        <td>
                            <label>Select Speciality</label> <br />
                            <select name="" id="">
                                <option value="">Cardiologist</option>
                                <option value="">Psychiatrist</option>
                            </select>
                        </td>
                        <td>
                            <label>Select Rating</label> <br />
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={()=>{searchDoc()}}>Search</button>
                            </td>
                            <td>
                                <button onClick={()=>{cancelFilter()}}>Cancel</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>)}
            {
                state==2 && (<div className='card'>
                    <center>
                        <div>
                            <h3>
                                Haroon's Schedule
                            </h3>
                        </div>
                        <label>Select Day</label>&nbsp;&nbsp;
                        <select name="FilterDay" id="Day" Value='Monday' onChange={(e)=>{setDay(e.target.value)}}>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </center>
                    <div>
                        <table>
                        <tr>
                                            <td><p className=''>Start Time</p></td>
                                            <td><p className=''>End Time</p></td>
                                            <td><p className=''>Status</p></td>
                                            <td></td>
                        </tr>
                    {
                            day=='Monday' && (schedule.monday.map((data)=>(
                                            <tr>
                                                <td><p className='badge badge-success'>{data.start}</p></td>
                                                <td><p className='badge badge-danger'>{data.end}</p></td>
                                                {
                                                    data.status==0 && (<td><p className='badge badge-dark'>Reserved</p></td>)
                                                }
                                                {
                                                    data.status==1 && (<><td><p className='badge badge-primary'>Available</p></td>
                                                    <td><p className='badge badge-success pl-4 pr-4' onClick={()=>{bookOn()}} style={{cursor:'pointer'}}>Book</p></td>
                                                    </>)
                                                }
                                                <td></td>
                                            </tr>
                            )))
                            
                    }
                    {
                        day=='Tuesday' && (schedule.tuesday.map((data)=>(
                            <tr>
                                <td><p className='badge badge-success'>{data.start}</p></td>
                                <td><p className='badge badge-danger'>{data.end}</p></td>
                                {
                                    data.status==0 && (<td><p className='badge badge-dark'>Reserved</p></td>)
                                }
                                {
                                    data.status==1 && (<><td><p className='badge badge-primary'>Available</p></td>
                                    <td><p className='badge badge-success pl-4 pr-4' onClick={()=>{bookOn()}} style={{cursor:'pointer'}}>Book</p></td>
                                    </>)
                                }
                                <td></td>
                            </tr>
                        )))
                    }
                    {
                        day=='Wednesday' && (schedule.wednesday.map((data)=>(
                            <tr>
                                <td><p className='badge badge-success'>{data.start}</p></td>
                                <td><p className='badge badge-danger'>{data.end}</p></td>
                                {
                                    data.status==0 && (<td><p className='badge badge-dark'>Reserved</p></td>)
                                }
                                {
                                    data.status==1 && (<><td><p className='badge badge-primary'>Available</p></td>
                                    <td><p className='badge badge-success pl-4 pr-4' onClick={()=>{bookOn()}} style={{cursor:'pointer'}}>Book</p></td>
                                    </>)
                                }
                                <td></td>
                            </tr>
                        )))
                    }
                    {
                        day=='Thursday' && (schedule.thursday.map((data)=>(
                            <tr>
                                <td><p className='badge badge-success'>{data.start}</p></td>
                                <td><p className='badge badge-danger'>{data.end}</p></td>
                                {
                                    data.status==0 && (<td><p className='badge badge-dark'>Reserved</p></td>)
                                }
                                {
                                    data.status==1 && (<><td><p className='badge badge-primary'>Available</p></td>
                                    <td><p className='badge badge-success pl-4 pr-4' onClick={()=>{bookOn()}} style={{cursor:'pointer'}}>Book</p></td>
                                    </>)
                                }
                                <td></td>
                            </tr>
                        )))
                    }
                    {
                        day=='Friday' && (schedule.friday.map((data)=>(
                            <tr>
                                <td><p className='badge badge-success'>{data.start}</p></td>
                                <td><p className='badge badge-danger'>{data.end}</p></td>
                                {
                                    data.status==0 && (<td><p className='badge badge-dark'>Reserved</p></td>)
                                }
                                {
                                    data.status==1 && (<><td><p className='badge badge-primary'>Available</p></td>
                                    <td><p className='badge badge-success pl-4 pr-4' onClick={()=>{bookOn()}} style={{cursor:'pointer'}}>Book</p></td>
                                    </>)
                                }
                                <td></td>
                            </tr>
                        )))
                    }
                    {
                        day=='Saturday' && (schedule.saturday.map((data)=>(
                            <tr>
                                <td><p className='badge badge-success'>{data.start}</p></td>
                                <td><p className='badge badge-danger'>{data.end}</p></td>
                                {
                                    data.status==0 && (<td><p className='badge badge-dark'>Reserved</p></td>)
                                }
                                {
                                    data.status==1 && (<><td><p className='badge badge-primary'>Available</p></td>
                                    <td><p className='badge badge-success pl-4 pr-4' onClick={()=>{bookOn()}} style={{cursor:'pointer'}}>Book</p></td>
                                    </>)
                                }
                                <td></td>
                            </tr>
                        )))
                    }
                    {
                        day=='Sunday' && (schedule.sunday.map((data)=>(
                            <tr>
                                <td><p className='badge badge-success'>{data.start}</p></td>
                                <td><p className='badge badge-danger'>{data.end}</p></td>
                                {
                                    data.status==0 && (<td><p className='badge badge-dark'>Reserved</p></td>)
                                }
                                {
                                    data.status==1 && (<><td><p className='badge badge-primary'>Available</p></td>
                                    <td><p className='badge badge-success pl-4 pr-4' onClick={()=>{bookOn()}} style={{cursor:'pointer'}}>Book</p></td>
                                    </>)
                                }
                                <td></td>
                            </tr>
                        )))
                    }
                    </table>
                        </div>
                </div>)
            }
            {
                state==3 && (<div className='card'>
                    <center> <h3>Password Confirmation</h3></center>
                    <br />
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Password'/>
                    <br />
                    <button onClick={()=>{confirmAppointment()}}>Confirm</button>
                </div>)
            }
        </div>
    )
}
export default Appointment
