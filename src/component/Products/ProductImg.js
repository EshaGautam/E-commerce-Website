import React from 'react'
import './ProductImg.css'
import { useState } from 'react';
function ProductImg(props) {

 const [isZoomed, setIsZoomed] = useState(false);
 const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

 const handleMouseMove = (event) => {
   const { left, top, width, height } = event.target.getBoundingClientRect();
   const x = (event.clientX - left) / width;
   const y = (event.clientY - top) / height;

   setCursorPosition({ x, y });
   setIsZoomed(true);
 };

 const handleMouseOut = () => {
   setIsZoomed(false);
 };

  return (
    <div className="img-ctn">
      <div className="product-container">
        <div
          className={`zoomed-area ${isZoomed ? "zoomed" : ""}`}
          style={{
            transformOrigin: `${cursorPosition.x * 100}% ${
              cursorPosition.y * 100
            }%`,
          }}
        ></div>
      </div>
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
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
        />
      </div>
    </div>
  );
}

export default ProductImg