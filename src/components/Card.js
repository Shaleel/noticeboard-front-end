import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import Loading from '../components/Loading'
import Axios from 'axios'
const Card=(props) =>{
    const thumb=props.photos[0]
    const [Thumbnail, setThumbnail] = useState('')
    const [loaded, setloaded] = useState(false)
    
    Axios.get(`https://pacific-crag-23437.herokuapp.com/api/getPhoto/${thumb}`).then(
        res=>{
            setThumbnail(res.data)
            setloaded(true)
        }
    ).catch(err=>console.log(err))
    return (
      <div style={{
          width:"50em"
      }} className="card rounded m-3 " >
          <Gallery id={props.id} title={props.title} photos={props.photos}/> 
        <div className="row no-gutters">
            
            <div className="col-auto" style={{
                width:"10vw"
            }}>
                {loaded?(<Link data-toggle="modal" data-target={`#${props.id}`} >
            <img className="" src={Thumbnail} alt="cover image" style={{
                width:"100%",
                height:"100%"
            }} ></img>
            </Link>):<Loading />}
            </div>
            <div className="col">
                <div className="card-block px-2 pt-2">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.department&&<span ><span className="font-weight-bold mr-2">Department:</span>{props.department}</span>}</p>
    <p className="card-text">{props.course&&<span ><span className="font-weight-bold mr-2">Course:</span>{props.course}</span>}</p>
                    <p className="card-text">{props.semester&&<span ><span className="font-weight-bold mr-2">Semester:</span>{props.semester}</span>}</p>
                    <p className="card-text mb-0">{props.date&&<span ><span className="font-weight-bold mr-2">Date:</span>{props.date}</span>} </p>
                </div>
            </div>
        </div>
  
  </div>
  
    )
}

export default Card
