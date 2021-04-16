import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import ModalImage from "react-modal-image";

const Image=(props)=> {
    const [src, setsrc] = useState('')
    const [className, setclassName] = useState("carousel-item")
    useEffect(() => {
        Axios.get(`https://pacific-crag-23437.herokuapp.com/api/getPhoto/${props.photoId}`)
        .then(res=>setsrc(res.data))
        .catch(err=>console.log(err))
    }, )
    
   
    return (
        <div className="carousel mt-2" >
            {src?<ModalImage
            small={src}
            large={src}
            showRotate={true}
            hideZoom={true}
            className="d-block img-fluid"
            />:<Loading />}
            
            
        </div>
        
    )
}

export default Image
