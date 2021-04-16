import Axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {courseList,departmentList} from '../helper/helperList'
const EditModal=(props)=> {
    const deptList=departmentList;
const crsList=courseList;
const [name, setname] = useState(props.name)
const [password, setpassword] = useState('')
const [title, settitle] = useState(props.title)
const [department, setdepartment] = useState(props.department)
const [course, setcourse] = useState(props.course)
const [semester, setsemester] = useState(props.semester)
const[passError,setpassError]=useState(false)
const[successMessage,setsuccessMessage]=useState(false)
const handlePassword=(e)=>{
  e.preventDefault();
  setpassword(e.target.value)
}
const checkPassword=(e)=>{
  e.preventDefault();
  if(e.target.value!=password)
    setpassError(true);
  else setpassError(false)
}

const handlePost=(e)=>{
  e.preventDefault();
}
    return (
        <div className="modal" id={`${props.target}-edit`} tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" >Edit {props.target}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              {
                successMessage&&
                <div className="alert alert-success">
                  Successfull Updation !!
                </div>
              }
              {
                // error
                passError&&
                <div className="alert alert-danger">
                  New passowrd and confirm password did not match
                </div>
              }
              {/* Form */
              (props.target=="User")&&
              <form id={props.target}>
              <div className="form-group">
                <label >Name</label>
                <input name="name" type="text" className="form-control" ></input>
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input name="password" type="password" className="form-control"  onChange={handlePassword}></input>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" onChange={checkPassword}></input>
              </div>
            </form>

              }

              {
                (props.target=="Notice")&&
                <form id={props.target}>
                  <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control" ></input>
                  </div>
                  <div className="form-group">
                      <label >Department</label>
                      <select className="form-control selectpicker">
              {Array.from(deptList).map(([key,value])=><option>{value}</option>)}
                      </select>
                  </div>
                  <div className="form-group">
                    <label >Photos</label>
                    <input type="file" multiple="true" className="form-control" ></input>
                  </div>
                </form>
              }
              {
                (props.target=="Datesheet"||props.target=="Syllabus")&&
                <form id={props.target}>
                  <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control" ></input>
                  </div>
                  <div className="form-group">
                    <label >Course</label>
                    <select className="form-control selectpicker">
              {Array.from(crsList).map(([key,value])=>value.map((elem)=><option>{elem}</option>))}
                    </select>
                  </div>
                  <div className="form-group">
                      <label >Semester</label>
                      <input type="number" className="form-control" ></input>
                   </div>
                   <div className="form-group">
                    <label >Photos</label>
                    <input type="file" multiple="true" className="form-control" ></input>
                  </div>
                </form>
              }


              
             
              
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={handlePost} type="button" className="btn btn-primary" >Update {props.target}</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EditModal
