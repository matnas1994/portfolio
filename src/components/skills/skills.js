import React from "react"
import Slider from '../UI/slider/slider';

import './skills.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
        <h1 className="skills__title">WHAT DO I KNOW?</h1>
        <Slider>
            <i className="slider__item fab fa-js"></i>
            <i className="slider__item fab fa-php"></i>
            <i className="slider__item fab fa-css3-alt"></i>
            <i className="slider__item fab fa-node"></i>
            <i className="slider__item fab fa-laravel"></i>
            <i className="slider__item fab fa-react"></i>
            <i className="slider__item fab fa-angular"></i>
        </Slider>
    </section>
  )
}


export default Skills


//<script src="https://kit.fontawesome.com/9b312434e8.js" crossorigin="anonymous"></script>