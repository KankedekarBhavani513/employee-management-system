import React, { useState } from 'react'
import { connect } from 'react-redux';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddPost = ({employees, addEmployee}) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
     e.preventDefault();
      
     const checkEmployeeEmailExists = employees.filter(
        ( employee) => employee.email ===email? employee :null);


     const checkEmployeePhoneExists = employees.filter(
         (employee) => employee.phone === phone ? employee :null);
          
        //console.log(checkEmail);

     if(!email || !phone || !name){
         return toast.warning("Please fill in all fields")
     }



     if(checkEmployeeEmailExists.length > 0){
         return toast.error("This email already Exists!");
     }

     if(checkEmployeePhoneExists.length > 0){
        return toast.error("This  phone number already Exists!");
    }

    const data = {
        id: employees[employees.length -1].id+1,
        name,
        email,
        phone,
    };
    addEmployee(data);
    toast.success("Employee added successfully!!");
    history.push("/");
  };

    
 
   
  return (

    
    <div className='container-fluid'>
         
         <h1 className='display-3  text-center'>
             Add Post</h1>
             <div className='row'>
         <div className='col-md-6 shadow mx-auto p-5'>
             <form onSubmit = {handleSubmit} >
                 <div className='form-group'>
                     <input type = "text" placeholder='Full Name' className='form-control'
                     value = {name} onChange = {(e) => setName(e.target.value)}/>
                 </div>
                 <div className='form-group'>
                     <input type = "email" placeholder='Email' className='form-control'
                     value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                 </div>
                 <div className='form-group'>
                     <input type = "number" placeholder='Phone Number' className='form-control'
                     value = {phone} onChange = {(e)=> setPhone(e.target.value)}/>
                 </div>
                 <div className='form-group'>
                     <input type = "submit" value='Add Employee' className='btn btn-block btn-dark'/>
                 </div>
             </form>
        
         </div>
        </div>
    </div>
  )
}
    
const mapStateToProps = (state) => ({
    employees: state,
  });
  const mapDispatchToProps = (dispatch) => ({
    AddEmployee: (data) => {
      dispatch({ type: "ADD_EMPLOYEE", payload: data });
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddPost);

