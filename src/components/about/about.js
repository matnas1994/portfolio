import React from "react";
import Image from '../image';
import './about.scss';

const About = () => {

  return (
    <section id="about_me" className="about-me">
        <h1 className="about-me__title">About me</h1>
        <div className="image-wrapper"
          name="about" data-sal="slide-down"
          data-sal-delay="2000"
          data-sal-easing="linear" data-sal-duration="2000"
        >
            <Image className="image-wrapper__image" name="myPhoto" sharp="fluid" alt="Mateusz Nasilowski"/>
        </div>
        <p  className="about-me__content" name="about" data-sal="slide-left"
          data-sal-delay="2000"
          data-sal-easing="linear" data-sal-duration="2000">
            Hi, my name is Mateusz and I love programming. I live in Olsztyn and I handle with creating web applications.
            I graduated from UWM with a engineering  degree diploma in Computer Science and at this moment
            I continue my education with the intention of obtaining a master of engineering degree.
            I'm currently focusing on learning javascript frameworks.
        </p>
    </section>
  )
}


export default About
