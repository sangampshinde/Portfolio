import React from 'react'
import "../App.css";

const About = ({load}) => {
  return (
    <div className = {`project__item ${load ? "zoom_in":""}`}>
                <div className="project_item_image">
                
                <img src={()=>{}} alt={()=>{}}/>
                </div>
                <h3>{()=>{}}</h3>
                <div className='project_item_button'>
                <a href={()=>{}} className='btn ' target="_blank">GitHub</a>
                <a href={()=>{}}  className='btn btn__primary' target="_blank"> Live Demo</a>  
                </div>
   </div>
  )
}

export default About