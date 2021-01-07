import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
import './App.css';

const Service=()=> {
  return (
    <>
    <div className="bgimg1">
      <div className="my-0">
        <h1 className="text-center">Our Service</h1>
      </div>
      <div className="container-fluid mb-0">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((val,ind)=>{
                  return<Card key={ind} imgsrc={val.imgsrc} title={val.title} />

                }) 
              }
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
    
  );
}

export default Service;
