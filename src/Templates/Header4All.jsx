import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderHome from '../Components/HeaderHome'

export default class Header4All extends Component {
    render() {
        return (
            <div className=''>
                <HeaderHome />
                <div style={{ minHeight: 650 }}>
                    <Outlet />
                </div>
            </div>
        )
    }
}
