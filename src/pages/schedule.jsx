
import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import logo from '../assets/images/logo.png'
import {useState} from "react"



var Schedule = [{
    'start':'01:00 PM',
    'end':'02:00 PM',
    'day':'Monday',
    'status':0
},{
    'start':'01:00 PM',
    'end':'02:00 PM',
    'day':'Tuesday',
    'status':1
},{
    'start':'01:00 PM',
    'end':'02:00 PM',
    'day':'Wednesday',
    'status':0
},
{
    'start':'01:00 PM',
    'end':'02:00 PM',
    'day':'Thursday',
    'status':0
},
{
    'start':'01:00 PM',
    'end':'02:00 PM',
    'day':'Friday',
    'status':0
},
{
    'start':'01:00 PM',
    'end':'02:00 PM',
    'day':'Saturday',
    'status':1
},
{
    'start':'01:00 PM',
    'end':'02:00 PM',
    'day':'Sunday',
    'status':0
}]



const Appointment = () => {

   
const [sTime,setSTime] = useState('01:00 PM')
const [eTime,setETime] = useState('03:00 PM')
const [day,setDay] = useState('01:00 PM')
const [state,setState]=useState(0);
const [updateStatus,setUpdateStatus] = useState(0);
const showPatient = () => {
    setState(1)
}
const Initupdate = ()=>{
    setUpdateStatus(1);
}
const refresh = ()=>{
    setState(0);
    setUpdateStatus(updateStatus-1);
}
    return (<>
        {updateStatus>0 && (<div><button onClick={()=>{refresh()}}>Back</button><br /></div>)}
        { updateStatus==0 &&(<div className='col-5 col-md-10'>
            { state==0 && (<div className='card'>
                <button onClick={()=>{Initupdate()}}>Update the Schedule</button><br />
                <center>
                    <h3>
                        My Schedule
                    </h3>
                </center>
                <table>
                            <tr>
                                <td>
                                    Time
                                </td>
                                <td>
                                    Day
                                </td>
                            </tr>
                   {
                       Schedule.map((date)=>{
                            if(date.status){
                            return (<tr>
                                <td>
                                    {date.start} To {date.end}
                                </td>
                                <td>
                                    {date.day}
                                </td>
                            </tr>)
                            }
                       })
                    }
                </table>

                </div>)
            }
        </div>)
        }
        { updateStatus==1 &&(<div className='col-6 col-md-12'>
            { state==0 && (<div className='card'>
                <center>
                    <h3>
                        My Schedule
                    </h3>
                </center>
                <table>
                            <tr>
                                <td>
                                    Start Time
                                </td>
                                <td>
                                    End Time
                                </td>
                                <td>
                                    Day
                                </td>
                                <td>
                                    Status
                                </td>
                            </tr>
                   {
                       Schedule.map((date)=>{
                            return (<tr>
                                <td>
                                    <input type="text" value={date.start} placeholder='Start Time'/>
                                </td>
                                <td>
                                    <input type="text" value={date.start} placeholder='End Time'/>
                                </td>
                                <td>
                                    {date.day}
                                </td>
                                <td>
                                    <input type="checkbox" value='1'/>
                                </td>
                            </tr>)
                       })
                    }
                </table>
                <button onClick={()=>{Initupdate()}}>Update the Schedule</button><br />
                </div>)
            }
        </div>)
        }
        </>
    )
}

export default Appointment
