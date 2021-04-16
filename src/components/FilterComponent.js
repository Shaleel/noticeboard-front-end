import React,{useState} from 'react'
import HomeNavbar from '../core/HomeNavbar'
import {departmentList,courseList} from "../helper/helperList"

const FilterComponent=(props)=> {
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
            <h1 className="text-center">{props.target}</h1><hr></hr>
            <div className="p-2  card flex-column justify-content-center align-items-center">
                
               <form>
               <div className="flex-row form-group">
                    <h5 className="mr-4">Department :</h5>
                    
                    <select className="form-control selectpicker" onChange={handleChange}>
                        {deptList}
                    </select>
                    
                </div>

                {
                    (props.target!="Notice")&&
                    <div className="flex-row form-group">
                        <h5 className="mr-4 ml-2">Course :</h5>
                    
                            
                            <select className="form-control selectpicker" onChange={handleChange}>
                            {cList}
                            </select> 
                            
                        
                        </div>
}
                {       (props.target!="Notice")&&
                        <div className="form-group">
                        <h5>Semester :</h5> <input className="form-control selectpicker" type="number"></input>
                        </div>


                }
               </form>
                
                <button className="btn btn-primary ml-4" onClick={handleFilter}>Search</button>
            </div>
        </div> 
        </div>
    )
}

export default FilterComponent
