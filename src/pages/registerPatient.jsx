import React from 'react'
import {useState} from "react"

const RegisterPatient = () => {
    const [state,setState]= useState(0);
    const getSession = () =>{
        localStorage.setItem('token','RandomStuff');
        window.location = 'http://localhost:3000/'
    }
    const submitDetail = () =>{
        setState(1);
    }
    const setMobile = () =>{
        setState(2);
    }
    const verifyOTP = () =>{
        setState(3);
    }
    const setPass = () =>{
        window.location = 'http://localhost:3000/patin'
    }
    return (<>
        <div className='col-8 col-md-6'>
            <div className='card'>
                <center>
                    <div>
                        <h3>
                            Register Patient
                        </h3>
                    </div>
                </center>
                <br />
                <br />
                {
                    state==0 && (<div>
                    <label>Patient Name</label>
                    <input type="text" placeholder='Patient Name'/>
                    <label>Age</label>
                    <input type="text" placeholder='Age'/>
                    <label>Address</label>
                    <input type="text" placeholder='Address'/>
                    <label>CNIC</label>
                    <input type="text" placeholder='CNIC'/>
                    <br />
                    <label>Select Gender</label>
                    <br />
                    <select name="" id="">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={()=>{submitDetail()}}>Submit</button>
                </div>)
                } 
                {
                    state==1 && (<div>
                    <p className='alert'>Enter your mobile number for OTP verification, follow order +92 3001111111</p>
                    <label>Mobile Number</label>
                    <input type="text" placeholder='Mobile Number'/>
                    <br />
                    <br />
                    <button onClick={()=>{setMobile()}}>Submit</button>
                </div>)
                } 
                {
                    state==2 && (<div>
                    <p className='alert'>4-digit OTP verification code has been sent to your mobile number +92 3001111111</p>
                    <label>Verification Code</label>
                    <input type="text" placeholder='4-Digit Code'/>
                    <br />
                    <br />
                    <button onClick={()=>{verifyOTP()}}>Submit</button>
                </div>)
                }
                {
                    state==3 && (<div>
                    <p className='alert'>Set your account password</p>
                    <label>Password</label>
                    <input type="password" className='form-control' placeholder='Password'/>
                    <label>Confirm Password</label>
                    <input type="password" className='form-control' placeholder='Confirm Password'/>
                    <br />
                    <br />
                    <button onClick={()=>{setPass()}}>Submit</button>
                    </div>)
                }   
            </div>
        </div>
    </>)
}

export default RegisterPatient
