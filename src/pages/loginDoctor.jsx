import React from 'react'

const DoctorLogin = () => {
    const getSession = () =>{
        localStorage.setItem('token','RandomStuff');
        localStorage.setItem('login','DOCTOR');
        window.location = 'http://localhost:3000/'
    }
    return (<>
        <div className='col-8 col-md-6'>
            <div className='card'>
                <center>
                    <div>
                        <h3>
                            Doctor Login
                        </h3>
                    </div>
                </center>
                <div>
                    <label>Mobile#</label>
                    <input type="text" placeholder='Mobile Number' value='+92'/>
                    <label>Password</label>
                    <input type="text" placeholder='Password'/>
                    <br />
                    <button onClick={()=>{getSession()}}>Submit</button>
                </div>
            </div>
        </div>
    </>)
}

export default DoctorLogin
