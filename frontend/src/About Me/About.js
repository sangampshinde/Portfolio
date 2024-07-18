import React from 'react'
import "../App.css";

const About = () => {
  return (
    <div className = {`project__item ${load ? "zoom_in":""}`} key={index}>
                <div className="project_item_image">
                
                <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='project_item_button'>
                <a href={github} className='btn ' target="_blank">GitHub</a>
                <a href={demo}  className='btn btn__primary' target="_blank"> Live Demo</a>  
                </div>
   </div>
  )
}

export default About