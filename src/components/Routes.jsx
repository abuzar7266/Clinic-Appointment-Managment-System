import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import DocProfile from '../pages/doctorProfile'
import Appointment from '../pages/appointment'
import PatientRecord from '../pages/patientRecord'
import mySchedule from '../pages/schedule'
import DoctorLogin from '../pages/loginDoctor'
import LogoutDoctor from '../pages/doctorLogout'
import PatientLogin from '../pages/PatientLogin'
import Register from '../pages/registerPatient'
import PatientProfile from '../pages/patientProfile'
import BookedAppointment from '../pages/bookings'
import FindDoctor from '../pages/CheckDoctor'
import HistoryAll from '../pages/AppointmentHistory'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/> 
            <Route path='/doctor' component={DocProfile}/>   
            <Route path='/appointment' component={Appointment}/> 
            <Route path='/Appointrecord' component={PatientRecord}/> 
            <Route path='/myschedule' component={mySchedule}/>
            <Route path='/docout' component={LogoutDoctor}/>
            <Route path='/docin' component={DoctorLogin}/>
            <Route path='/patin' component={PatientLogin}/>
            <Route path='/register' component={Register}/>
            <Route path='/profile' component={PatientProfile}/>
            <Route path='/booking' component={BookedAppointment}/>
            <Route path='/history' component={HistoryAll}/>
            <Route path='/find' component={FindDoctor}/>
        </Switch>
    );
}

export default Routes
