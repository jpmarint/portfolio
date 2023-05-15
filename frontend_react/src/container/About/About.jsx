import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  { title: 'Full Stack Developement', description: 'I am a good Full Stack developer', imgUrl: images.about01},
  { title: 'Python Developement', description: 'I am a good Python developer', imgUrl: images.about02},
  { title: 'Machine Learning', description: 'I am a good ML Engineer', imgUrl: images.about03},
  { title: 'Product Design', description: 'I am a good web Product Designer', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know That <span>Good Dev</span> <br /> means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About