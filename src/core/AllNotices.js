import React, { useEffect, useState } from 'react'
import HomeNavbar from './HomeNavbar'
import "../styles/AllPage.css"
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Axios from 'axios'
import { isAdmin, isLoggedin } from '../helper/helperFunctions'
import Loading from '../components/Loading'


const AllNotices = () => {
    const [noticeArr, setnoticeArr] = useState([])
    const [loaded,setloaded]=useState(false)
    let tempArr=[]
     useEffect(()=>{
        
             Axios.get(`https://pacific-crag-23437.herokuapp.com/api/getAllNotice`).then( (res)=>{
                setnoticeArr(res.data)
                setloaded(true)
                return
            })
            .catch(err=>console.error(err))
        

    },[noticeArr,loaded])

    
    return (
        <div>
            <HomeNavbar />
            
            <div className="">
                <div className="heading ">
                <h1 className="text-center mt-3">All Notices</h1> <Link className=" btn btn-primary filter text-white" to="/filterNotices">Filter</Link >
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
                    noticeArr.map(notice=>
                    <Card 
                    title={notice.title} 
                    id={notice._id}
                    department={notice.department}
                    photos={notice.photos}
                    course={notice.course}
                    semester={notice.semester}></Card>
                    ):<Loading />
                    
                }
            </div>


        </div>
    )
}

export default AllNotices
