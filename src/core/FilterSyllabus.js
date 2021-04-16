import React,{useState} from 'react'
import HomeNavbar from './HomeNavbar'
import {courseList,departmentList} from '../helper/helperList'

const FilterSyllabus=()=> {
      
    const [department, setdepartment] = useState("HIMSR")
    const handleFilter=(e)=>{
        e.preventDefault()
        alert(department)

    }
    const handleChange=(e)=>{
        setdepartment(e.target.value)
    }
const deptList=Array.from(departmentList).map(([key,value])=>(<option value={key}>{value}</option>))
    
    
        
    
    const cList=courseList.get(department).map((item)=>
    <option value={item}>{item}</option>
                )
            
    
    return (
        <div>
           <div>
            <HomeNavbar />
            <h1 className="text-center">Syllabus</h1><hr></hr>
            <div className="p-2  card flex-column justify-content-center align-items-center">
                <div className="flex-row">
                    <h5 className="mr-4">Department :</h5>
                    
                    <select onChange={handleChange}>
                        {deptList}
                    </select>
                    
                </div>
                <div className="flex-row">
                <h5 className="mr-4 ml-2">Course :</h5>
               
                    {
                       <select onChange={handleChange}>
                       {
                            cList
                       }
                   </select> 
                    }
                
                </div>
                <h5>Semester :</h5> <input type="number"></input>
                <button className="btn btn-primary ml-4" onClick={handleFilter}>Search</button>
            </div>
        </div> 
        </div>
    )
}

export default FilterSyllabus
