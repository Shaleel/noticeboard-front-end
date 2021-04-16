import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {courseList,departmentList} from '../helper/helperList'
import Axios from 'axios'



const AddModal=(props)=> {
  const deptList=departmentList;
const crsList=courseList;
const [name, setname] = useState('')
const [password, setpassword] = useState('')
const [confirmPassword, setconfirmPassword] = useState('')
const [isAdmin,setisAdmin]=useState(false)
const [photo, setphoto] = useState(null)
const [title, settitle] = useState('')
const [department, setdepartment] = useState('')
const [course, setcourse] = useState('')
const [semester, setsemester] = useState('')
const [successMessage,setsuccessMessage]=useState('')
const [errorMessage,seterrorMessage]=useState('')



const handleSubmit= async(e)=>{
      e.preventDefault();
      if(props.target==='User'){
        
        Axios.post('https://pacific-crag-23437.herokuapp.com/api/signup',{
          name:name,
          password:password,
          isAdmin:isAdmin
        },{
          headers:{
            'Authorization':`Bearer ${localStorage.getItem("token")}`
          }
        }).then(res=>setsuccessMessage(`${res.data.name} successfully added to DB`)).catch(err=>console.log(err))
      }

      if(props.target==='Notice'){
        let photosArr=[];

        let formData=new FormData();
        // formData.append("title",title)
        // formData.append("department",department)
        const url='https://api.cloudinary.com/v1_1/shaleel/image/upload'
        for (let i = 0; i < photo.length; i++) {
          let file = photo[i];
          formData.append("file", file);
          formData.append("upload_preset", "NoticeBoard");
      
          await fetch(url, {
            method: "POST",
            body: formData
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data)
              photosArr.push(data.url)
            });
        }
        // console.log(title+department+photosArr)
        // await Axios(
        //   'http://localhost:8000/api/addNotice',{
        //     method:'post',
        //     data:{
        //       title:title,
        //       department:department,
        //       photos:photosArr
        //     },
        //     headers:{
        //       'Authorization':`Bearer ${localStorage.getItem("token")}`
        //     }
        //   }
        // ).then(res=>console.log(res))
        // .catch(err=>console.log(err))

        // await fetch('http://localhost:8000/api/addNotice',{
        //   body:{
        //       title:title,
        //       department:department,
        //       photos:photosArr
        //   },
        //   headers:{
        //     'Authorization':`Bearer ${localStorage.getItem("token")}`
        //   }
        // }).then(res=>res.json()).
        // then(data=>console.log(data))
        // .catch(err=>console.log(err))
      }
  
  }
    return (
        <div className="modal" id={props.target} tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" >Add {props.target}</h5>
              <button type="button" className="close" onClick={()=>{
                 setsuccessMessage('')
                 seterrorMessage('')
              }} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {(password!==confirmPassword&&props.target==='User')&&
                <div className="alert alert-danger">
                  New passowrd and confirm password did not match
                </div>}
                
                {
                  (successMessage!=='')&&<div className="alert alert-success">
                  {successMessage}
                </div>
                }
                
            <div className="modal-body">
              
              {/* Form */
              (props.target=="User")&&
              <form>
              <div className="form-group">
                <label >Name</label>
                <input type="text" className="form-control"  onChange={(e)=>setname(e.target.value)} ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} ></input>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" onChange={(e)=>setconfirmPassword(e.target.value)}></input>
              </div>
              <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch" checked={isAdmin} onChange={(e)=>setisAdmin(e.target.chceked)}></input>
              <label class="custom-control-label" for="customSwitch">Admin</label>
        </div>
            </form>

              }

              {
                (props.target=="Notice")&&
                <form enctype="multipart/form-data" id="Notice" name="Notice">
                  <div className="form-group">
                    <label >Title</label>
                    <input required type="text" className="form-control" onChange={(e)=>settitle(e.target.value)}></input>
                  </div>
                  <div className="form-group">
                      <label >Department</label>
                      <select required className="form-control selectpicker" searchable="true" data-live-search="true" onChange={(e)=>setdepartment(e.target.value)}>
              {Array.from(deptList).map(([key,value])=><option>{value}</option>)}
                      </select>
                  </div>
                  <div className="form-group">
                    <label >Photos</label>
                    <input required type="file" id="photo" multiple="true" className="form-control" onChange={(e)=>setphoto(e.target.files)}></input>
                    
                  </div>
                </form>
              }
              {
                (props.target=="Datesheet"||props.target=="Syllabus")&&
                <form id="Datesheet/Syllabus">
                  <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control"  onChange={(e)=>settitle(e.target.value)} ></input>
                  </div>
                  <div className="form-group">
                    <label >Course</label>
                    <select class="form-control selectpicker" searchable="true" data-live-search="true" onChange={(e)=>setcourse(e.target.value)}>
              {Array.from(crsList).map(([key,value])=>value.map((elem)=><option>{elem}</option>))}
                    </select>
                  </div>
                  <div className="form-group">
                      <label >Semester</label>
                      <input type="number" className="form-control" onChange={(e)=>setsemester(e.target.value)} ></input>
                   </div>
                   <div className="form-group">
                    <label >Photos</label>
                    <input type="file" id="photos" multiple="true" className="form-control" onChange={(e)=>setphoto(e.target.files)} ></input>
                  </div>
                </form>
              }

 
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{
                setsuccessMessage('')
                seterrorMessage('')
              }
                
              }>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save {props.target}</button>
            </div>
          </div>
        </div>
      </div>
    )

}
export default AddModal