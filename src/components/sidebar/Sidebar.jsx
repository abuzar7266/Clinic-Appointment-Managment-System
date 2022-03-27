import React from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    ((((localStorage.getItem('login')=='PATIENT' && (item.display_name=='Appointment History' || item.display_name=='Logout' || item.display_name=='Home' || item.display_name=='Patient Profile' || item.display_name=='Booked Appointment' || item.display_name=='Find Doctor'))) || (localStorage.getItem('login')=='DOCTOR' && (item.display_name=='Doctor Panel' || item.display_name=='Logout' || item.display_name=='Appointments' || item.display_name=='My Profile' || item.display_name=='Schedule' || item.display_name=='Patients Record'))) && (<Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>))
                ))
            }
        </div>
    )
}

export default Sidebar
