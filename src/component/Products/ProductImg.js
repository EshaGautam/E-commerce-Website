import React from 'react'
import './ProductImg.css'

function ProductImg(props) {

 
  return (
   <div className="img-ctn">
      <div className="extra-img">
        <img src={props.src} alt="right"></img>
        <img src={props.src} alt="back"></img>
        <img src={props.src} alt="front"></img>
        <img src={props.src} alt="left"></img>
        <img src={props.src} alt="zoom"></img>
      </div>
      <div className="main-img">
        <img
          src={props.src}
          alt="no"
       
        />
      </div>
    </div>
  );
}

export default ProductImg