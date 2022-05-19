import React from 'react';
import {Route,Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Home from './components/Home';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';


const App = () => {
  return (
    <>

    <h1> EMPLOYEE MANAGEMENT SYSTEM</h1>

    <br />
    <div className='App'>
      <ToastContainer />
      <Navbar/>
     <switch>
       <Route exact path = "/" component = {() =><Home />} />
       
       <Route  path = "/add">
         <AddEmployee/>
      
       </Route>

       <Route  path = "/edit/:id">
       <EditEmployee/>
     
       </Route>
     </switch>
     
     </div>
    
    
    </>
  )
}

export default App 