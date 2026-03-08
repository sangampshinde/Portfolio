import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import  { urlFor, client } from "../../client"

import { AppWrap } from '../../wrapper';


import './Skills.scss';

const Skills = () => {







useEffect(() => {

    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });


    





  }, []);











  return (
     <>
     <h2 className="head-text">Skills & Experiences</h2>
     <div className="app__skills-container">

      <motion.div className="app__skills-list">
      {skills.map((skill) => (
        <motion.div
         whileInView={{ opacity: [0, 1] }}
         className="app__skills-item app__flex"
        
        >





        </motion.div>
      ))}

      </motion.div>

     </div>
     </>
  )
}

export default Skills