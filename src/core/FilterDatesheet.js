import React,{useState} from 'react'
import HomeNavbar from './HomeNavbar'
import {courseList,departmentList} from '../helper/helperList'
const FilterDatesheet=()=> {
    
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
            <h1 className="text-center">Datesheets</h1><hr></hr>
            <div className="p-2  card flex-column justify-content-center align-items-center">
                <form>
                <div className="flex-row form-group">
                    <h5 className="mr-4">Department :</h5>
                    
                    <select onChange={handleChange}>
                        {deptList}
                    </select>
                    
                </div>
                <div className="flex-row form-group">
                <h5 className="mr-4 ml-2">Course :</h5>
               
                    {
                       <select onChange={handleChange}>
                       {
                            cList
                       }
                   </select> 
                    }
                
                </div>
                <div className="form-group">
                <h5>Semester :</h5> <input type="number"></input>
                </div>
                </form>
                <button className="btn btn-primary ml-4" onClick={handleFilter}>Search</button>
            </div>
        </div> 
        </div>
    )
}

export default FilterDatesheet
