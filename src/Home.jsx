import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/on1.png';
import web1 from '../src/images/restaurant.jpg';
import Common from './Common';

const Home=()=> {
  return (
    <>
      <div className="bgimg">
      <Common className="bg_img" name="Welcome to Home Page with"  imgsrc={web} visit="/service" btnName="Get started"/>
      </div>
    </>
    
  );
}

export default Home;
