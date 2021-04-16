import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Loading from '../components/Loading'
import HomeNavbar from './HomeNavbar'

const AllDatesheets=()=> {
    const [datesheetArr, setdatesheetArr] = useState([])
    const [loaded,setloaded]=useState(false)
    let tempArr=[]
     useEffect(()=>{
        
             Axios.get(`https://pacific-crag-23437.herokuapp.com/api/getAllDatesheet`).then( (res)=>{
                setdatesheetArr(res.data)
                setloaded(true)
                return
            })
            .catch(err=>console.error(err))
        

    },[datesheetArr,loaded])
    return (
        <div>
            <HomeNavbar />
            
            <div className="">
                <div className="heading ">
                <h1 className="text-center mt-3">All Datesheets</h1> <Link className=" btn btn-primary filter text-white" to="/filterDatesheets">Filter</Link >
                </div>
                <hr></hr>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                flexWrap:"wrap"
            }}>
                
                {
                    (loaded)?
                    datesheetArr.map(datesheet=>
                    <Card 
                    title={datesheet.title} 
                    id={datesheet._id}
                    department={datesheet.department}
                    photos={datesheet.photos}
                    course={datesheet.course}
                    semester={datesheet.semester}></Card>
                    ):<Loading />
                    
                }
            </div>


        </div>
    )
}

export default AllDatesheets
