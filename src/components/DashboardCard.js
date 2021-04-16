import Axios from 'axios'
import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {isAdmin} from '../helper/helperFunctions'
import EditModal from './EditModal'
import Loading from './Loading'

const DashboardCard=(props)=> {
    const [,updateState]=useState()
const [name, setname] = useState('')
const [password, setpassword] = useState('')
const [title, settitle] = useState(props.title)
const [id, setid] = useState(props.id)
const [department, setdepartment] = useState(props.department)
const [course, setcourse] = useState(props.course)
const [semester, setsemester] = useState(props.semester)
const [loaded, setloaded] = useState(false)
const [thumb,setthumb]=useState('')
const [deleteLoading, setdeleteLoading] = useState(0)
const update=()=>{updateState()}
                Axios.get(`https://pacific-crag-23437.herokuapp.com/api/getUser/${props.createdBy}`).then(res=>{
                    setname(res.data.name)
                    return 
                })
                
                
                if(props.photos){
                    Axios.get(`https://pacific-crag-23437.herokuapp.com/api/getPhoto/${props.photos[0]}`).then(res=>{
                    setthumb(res.data)
                    setloaded(true)
                    return 
                })
                }
    const deleteElem=()=>{
        
        setdeleteLoading(1);
            Axios.delete(`https://pacific-crag-23437.herokuapp.com/api/delete${props.target}/${id}`,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res=>{
                setdeleteLoading(2);
            })
            .catch(err=>console.log(err));
    
    }


    return (
        <div>
          <div style={{
          width:"70vw"
      }} className="card rounded m-3 ">
        <div className="row no-gutters">
            {(props.target!="User")&&<div className="col-auto" style={{
                width:"10vw"
            }}>{
                loaded?
                (<Link data-toggle="modal" data-target={`#${props.id}`} >
                <img className="" src={thumb} alt="cover image" style={{
                width:"100%",
                height:"100%"
            }} ></img>
            </Link>):<Loading />}
            </div>}
            <EditModal target={props.target}/>
            <div className="col">
                <div className="card-block px-2 pt-2">
                    <h4 className="card-title">{(props.target!=='User')?props.title:props.name}</h4>
            {
                (props.target==="Notice"&&props.target!=="User")&&<p className="card-text">Department : {props.department||"SEST"}</p>
            }
            {
                (props.target!=="Notice"&&props.target!=="User")&&<p className="card-text">Course : {props.course||"CSE"}</p>
            }
            {
                (props.target!=="Notice"&&props.target!=="User")&&<p className="card-text">Semester : {props.semester||"2"}</p>
            }
        <p className="card-text mb-1">Created At : {props.createdAt||<Loading />}</p>
        {
            isAdmin()&&(props.target!=='User')&&<p className="card-text mb-1">Created By : {
                name
                }</p>
        }
        
                    
                </div>
            </div>
            <div className="col-auto  mr-2 p-2 ">
                <div className=" rounded-circle  bg-secondary mb-2">
                    <button className="btn rounded " data-target={`#${props.target}-edit`} data-toggle="modal" ><i className=" fa fa-pen text-white"></i></button>
                </div>
                <div className=" rounded-circle  bg-danger ">{
                    deleteLoading===0?(<button className="btn rounded " onClick={()=>{
                        Axios.get(`http://localhost:8000/api/delete${props.target}/${id}`,{
                            headers:{
                                'Authorization':`Bearer ${localStorage.getItem("token")}`
                            }
                        })
                        .then(res=>console.log(res))
                        .catch(err=>console.log(err));
                    }} ><i className=" fa fa-trash text-white"></i></button>):<Loading />}
                </div>
                
            </div>
        </div>
        
  </div>  
        </div>
    )
}

export default DashboardCard
