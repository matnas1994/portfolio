import React from "react";
import './slider.scss';

const Slider = (props) => {


  return (
    <div className="slider">
          <div className="slider__mask">
              <div className="slider__wrapper">         
                  {props.children}
              </div>   
          </div>
      </div>
  )
}


export default Slider
