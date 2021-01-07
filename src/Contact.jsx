import React, { useState } from 'react';
import './App.css';

const Contact=()=> {

  const formSubmit=(event)=>{
    event.preventDefault();
    alert(`My name is ${data.fullname},my phone no is ${data.phone},My email is ${data.email}`);
  };

  const[data,setData]=useState({
    fullname:"",
    email:"",
    phone:"",
    message:"",
  });

  const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;

    setData((prevVal)=>{
      return{
        ...prevVal,
        [name]:value,
      };
    });

  };

  return (

   

    <>
    <div className="bgimg">
      <div className="my-0">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
        
        <form onSubmit={formSubmit}>

          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label labelcls">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={data.fullname} name="fullname" onChange={inputEvent} placeholder="Name Enter"/>
          </div>
          
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label labelcls">Phone Number</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={data.phone} name="phone" onChange={inputEvent} placeholder="Mobile Number"/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label labelcls">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" value={data.email} name="email" onChange={inputEvent} placeholder="name@example.com"/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label labelcls">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={data.message} name="message" onChange={inputEvent} ></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>


        </form>
        </div>
        </div>
        </div>
        </div>
    </>
    
  );
}

export default Contact;
