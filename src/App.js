import React from 'react';
import Service from './Service';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import { Redirect, Route, Switch } from 'react-router-dom';

const App=()=> {
  return (
    <>
    
    <Navbar />
    
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Redirect to='/'/>
    </Switch>
    
    <Footer/>
      
    </>
    
  );
}

export default App;
