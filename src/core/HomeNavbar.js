import React,{useState} from 'react'
import { Link, Redirect } from "react-router-dom";

import {isAdmin,isLoggedin} from "../helper/helperFunctions"
const HomeNavbar=()=> {
  const [, setstate] = useState('')
  const clearToken=()=>{
    localStorage.removeItem("token")
    setstate();
    return <Redirect to="/" />

  }
    return (
        <nav style={{
          zIndex:"100"
        }} className="navbar navbar-expand-md bg-dark navbar-dark  shadow-lg   rounded">
  <Link className="navbar-brand" to="/">NoticeBoard</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
        Notices
      </Link>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to="/allNotices">All Notices</Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/filterNotices">Filter Notices</Link>
        
      </div>
    </li>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
        Datesheets
      </Link>
      <div className="dropdown-menu">
      <Link className="dropdown-item" to="/allDatesheets">All Datesheets</Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/filterDatesheets">Filter Datesheets</Link>
      </div>
    </li>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
        Syllabus
      </Link>
      <div className="dropdown-menu">
      <Link className="dropdown-item" to="/allSyllabus">All Syllabus</Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/filterSyllabus">Filter Syllabus</Link>
      </div>
    </li>
    {
      isLoggedin()&&!isAdmin() && (
        <li className="nav-item active">
            <Link className="nav-link" to="/userDashboard">User Dashboard</Link>
          </li>
      )
    }
    {
      isLoggedin()&&isAdmin() && (
        <li className="nav-item active">
            <Link className="nav-link" to="/adminDashboard">Admin Dashboard</Link>
          </li>
      )
      
    }
    {
      isLoggedin()?(
        <li className="nav-item active">
            <Link className="nav-link" to="#" onClick={clearToken} > Logout</Link>
          </li>)
        :<li className="nav-item active">
            <Link className="nav-link" to="/login"> Login</Link>
          </li>
      }
      
       </ul>
  
  </div>
</nav>

    )
}

export default HomeNavbar
