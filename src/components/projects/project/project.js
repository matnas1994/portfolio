import React from "react";
import Image from '../../image';
import './project.scss';


const Projects = ({ isReverse, title, description, github, live}) => {
  return (
      <div className="project"  data-sal={isReverse?"slide-left":"slide-right"}
      data-sal-delay="2000"
      data-sal-easing="linear" data-sal-duration="2000">
        <div className="project__image">
            <Image name={title} sharp="fluid" alt={title} />
            <div className="project__details">
              {github &&
              <a className="project__details__link" href="https://google.pl">
                <i className="project__details__icon fab fa-github"></i>
              </a>
              }
              {live &&
                <a className="project__details__link project__details__link--live" href={live}>
                  Live
                </a>}
            </div>
        </div>
        <p className="project__description">{description}</p>
     </div>
  )
}


export default Projects