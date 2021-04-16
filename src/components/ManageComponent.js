import React, { useEffect, useState } from 'react'
import DashboardMenu from '../core/DashboardMenu'
import HomeNavbar from '../core/HomeNavbar'
import AddModal from '../components/AddModal'
import AddButton from '../components/AddButton'
import DashboardCard from './DashboardCard'
import { Link } from 'react-router-dom'
import EditModal from './EditModal'
import Loading from './Loading'
import Axios from 'axios'
import { isAdmin } from '../helper/helperFunctions'
const ManageComponent=(props)=> {
    const [Arr, setArr] = useState([]);
    const [loaded, setloaded] = useState(false)
    useEffect(()=>{
        Axios.get(`https://pacific-crag-23437.herokuapp.com/api/getAll${props.target}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{
            setArr(res.data) 
            setloaded(true)
            return
        })
        .catch(err=>console.error(err))
    },)
    return (
        <div>
            
            <HomeNavbar/> 
            <DashboardMenu />
            <div style={{
                position:"absolute",
                right:"0",
                top:"6vh"
            }} className=" col-9 mr-0">
                <h1>Manage {props.target}</h1>
                <div className="dropdown-divider"></div>
                <AddModal target={`${props.target}`} />
                
                <div className="text-dark   d-flex flex-row justify-content-between p-2"> <h5>Add {props.target}:</h5><AddButton target={`${props.target}`}/></div>

                {/* card */}
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    width:"100%"
                }}>
                   { 
                   loaded?
                   Arr.map(elem=>(
                       <DashboardCard
                        target={props.target} 
                        name={elem.name}
                        title={elem.title} 
                        id={elem._id}
                        department={elem.department}
                        photos={elem.photos}
                        course={elem.course}
                        semester={elem.semester}
                        createdAt={elem.createdAt}
                        createdBy={elem.createdBy}
                        
                       ></DashboardCard>
                   ))
                   :<Loading />
                   }
                    
                </div>
                
            </div> 

            
        </div>
    )
}

export default ManageComponent
