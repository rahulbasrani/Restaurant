import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/on3.png';
import Common from './Common';

const About=()=> {
  return (
    <>
      <div className="bgimg">
        <Common name="Welcom to About Page" imgsrc={web} visit="/contact" btnName="contact now"/>
      </div>
    </>
    
  );
}

export default About;
