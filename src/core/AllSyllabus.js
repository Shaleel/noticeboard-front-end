import React from 'react'
import HomeNavbar from './HomeNavbar'
import { Link } from 'react-router-dom'
const AllSyllabus=()=> {
    return (
        <div>
          <HomeNavbar/>
            <div className="heading ">
            <h1 className="text-center">All Syllabus</h1> <Link className=" btn btn-primary filter text-white" to="/filterSyllabus">Filter</Link >
            </div>
            <hr></hr>  
        </div>
    )
}

export default AllSyllabus
