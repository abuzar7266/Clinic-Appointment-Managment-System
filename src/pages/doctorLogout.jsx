import React from 'react'

const DoctorLogout = () => {
    localStorage.removeItem('token');
    window.location = 'http://localhost:3000/docin'
}

export default DoctorLogout
