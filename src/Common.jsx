import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/on3.png';

const Common=(props)=> {
  return (
    <>
      <section id="header" className="d-flex align-items-center" >
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>
              <span className="colring"> {props.name}</span> <strong className="brand-name">MyRestaurant</strong>
              </h1>
              <h2 className="my-3 paracls">
                We are the team of talanted worldclass chefs
              </h2>
              <div className="mt-3">
                <NavLink to={props.visit} className="btn-get-started">
                  {props.btnName}
                </NavLink>
              </div>
            </div>  
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={props.imgsrc} height="400" width="400" className="img-fluid imgcore animated" alt="Common img"/>  
            </div>       
          </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Common;
