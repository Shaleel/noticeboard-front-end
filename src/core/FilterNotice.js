import React, { useState } from 'react'
import HomeNavbar from './HomeNavbar'
import {departmentList} from '../helper/helperList'
const FilterNotice=()=> {
const [department, setdepartment] = useState("")
    const handleFilter=(e)=>{
        e.preventDefault()
        alert(department)

    }
    const handleChange=(e)=>{
        setdepartment(e.target.value)
    }
    const deptList=Array.from(departmentList).map(([key,value])=>(<option value={key}>{value}</option>))
    return (
        <div>
           <div>
            <HomeNavbar />
            <h1 className="text-center"> Notices</h1><hr></hr>
            <div className="p-2  card flex-row justify-content-center align-items-center">
                <h4 className="mr-4">Department :</h4>
                <select onChange={handleChange} >
                    {deptList}
                </select>
                <button className="btn btn-primary ml-4" onClick={handleFilter}>Search</button>
            </div>
        </div> 
        </div>
    )
}

export default FilterNotice

