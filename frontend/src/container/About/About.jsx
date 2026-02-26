import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion';
import { images } from "../../constants"
import  { urlFor, client} from "../../client"
import { AppWrap } from "../../wrapper"


const abouts1 = [
  {
    title: "Web Development",
    description: "I build responsive and scalable web applications.",
    imageUrl: images.about01,
  },
  {
    title: "Frontend Development",
    description: "I create modern, responsive and interactive UI using React.",
    imageUrl: images.about02,
  },
  {
    title: "Backend Development",
    description: "I develop secure and scalable APIs using Node.js & Express.",
    imageUrl: images.about03,
  },
  {
    title: "UI/UX Design",
    description: "I design clean, user-friendly and modern interfaces.",
    imageUrl: images.about04,
  },
];


const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
      .catch((err) => {
        console.error("Error fetching about data:", err);
      });
  }, []);












  return (
    <>
    <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
    <div className="app__profiles">

      {abouts.map((about, index) => (
         <motion.div
         whileInView={{ opacity: 1 }}
         whileHover={{ scale: 1.1 }}
         transition={{ duration: 0.5, type: 'tween' }}
         className="app__profile-item"
         key={about.title + index}
         >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
         </motion.div>
      ))}

    </div>
    </>
  )
}

export default AppWrap ( About,'about')