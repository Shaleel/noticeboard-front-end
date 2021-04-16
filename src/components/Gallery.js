import Axios from 'axios';
import React, { useState } from 'react'
import Image from '../components/Image'

const Gallery=(props)=> {
    const nums=[]
    const [thumb, setthumb] = useState(props.photos[0])
    for(let i=0;i<props.photos.length;i++){
        nums[i]=i
    }
    
    return (
        // <!-- Modal -->
        <>
  <div className="modal" {...props} style={{
      display:'none'
  }} aria-hidden="true" >
            <div className="modal-dialog modal-lg">
            <div className="modal-content">
            
                
                <div className="modal-header">
                <h4 className="modal-title">{props.title} </h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                
                
                <div className="modal-body">
                

        
        
        
        {/* <!-- slideshow --> */}

        <div id="demo" className="carousel slide" data-ride="carousel" data-interval="false">

  
  
  
  {/* <!-- slideshow --> */}
  <div className="carousel-inner">
      {
          props.photos.map(photoId=>(
              <Image thumb={props.photos[0]} photoId={photoId} />
          ))
      }
      
    
    
  </div>
  
  {/* <!-- L & R --> */}
  
</div>
        
            
		
                </div>
                
                
                
                <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
  </div>
  </>
    )
}

export default Gallery
