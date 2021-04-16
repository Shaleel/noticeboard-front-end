import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {isAdmin,isLoggedin} from '../helper/helperFunctions'
const DashboardMenu=(props)=> {
    
    return (
        <div style={
            {height: "100%",
             position: "fixed",
             zIndex:"-1",
             left: "0",
             overflowX: 'hidden',
             transition: "0.5s",
             color:"White"}} className="bg-dark col-3 pt-5  p-0 shadow-lg fixed-top  ">
                 
             <ul className="list-group mt-5 ">
    { isLoggedin()&&isAdmin() && (
        <li className="list-group-item bg-dark">
            <Link className=" " to="/manageUser" target="_self" className="text-white btn ">Manage User</Link>
          </li>
      )}
    <li className="list-group-item bg-dark">
        <Link to="/manageNotice" target="_self" className="text-white btn ">Manage Notice</Link>
    </li>
    <li className="list-group-item bg-dark ">
        <Link to="/manageSyllabus" target="_self" className="text-white btn ">Manage Syllabus</Link>
    </li>
    <li className="list-group-item bg-dark">
        <Link to="/manageDatesheet" target="_self" className="text-white btn ">Manage Datesheets</Link>
    </li>
   

  </ul>
        </div>
    )
}

export default DashboardMenu
