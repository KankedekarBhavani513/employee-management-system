import React, {useEffect, useState}from 'react'
import { connect } from 'react-redux';
import {useHistory,useParams} from "react-router-dom"
import { toast } from 'react-toastify';

const EditEmployee=({employees, updateEmployee}) =>{
    const {id} = useParams();
    const history = useHistory();
    const currentEmployee = employees.find(
        (employee) => employee.id === parseInt(id)
      );

      useEffect(() => {
        setName(currentEmployee.name);
        setEmail(currentEmployee.email);
        setPhone(currentEmployee.phone);
      }, [currentEmployee]);
     
      const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");


    

    const handleSubmit = (e) => {
     e.preventDefault();
      
     const checkEmployeeEmailExists = employees.filter(
        ( employee) => employee.email ===email? employee :null);


     const checkEmployeePhoneExists = employees.filter(
         (employee) => employee.phone === phone ? employee :null);
         
         

     if(!email || !phone| !name){
         return toast.warning("Please fill in all fields")
     }

     if(checkEmployeeEmailExists.length > 0){
        return toast.error("This email already Exists!");
    }

    if(checkEmployeePhoneExists.length > 0){
       return toast.error("This  phone number already Exists!");
   }

    const data = {
        id: currentEmployee.id,
        name,
        email,
        phone,
    };
    updateEmployee(data);
    toast.success("Employee updated successfully!");
    history.push("/");
};

return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentEmployee ? (

       <form onSubmit={handleSubmit}>
          <div className="form-group">
          <input
               className="form-control"
               value={name}
               placeholder={"Name"}
               onChange={(e) => setName(e.target.value)}
             />
           </div>
           <div className="form-group">
             <input
               className="form-control"
               value={email}
               placeholder={"Email"}
               onChange={(e) => setEmail(e.target.value)}
             />
           </div>
           <div className="form-group">
             <input
               className="form-control"
               value={phone}
               placeholder={"Phone"}
               onChange={(e) => setPhone(e.target.value)}
             />
           </div>
           <div className="form-group d-flex align-items-center justify-content-between my-2">
             <button type="submit" className="btn btn-primary">
               Update Employee
             </button>
             <button
               type="button"
               className="btn btn-danger"
               onClick={() => history.push("/")}
             >
               cancel
             </button>
           </div>
           </form>
           ) : (
           <h1 className="text-center">No Employee Found</h1>
           )}
              </div>
             </div>
           </div>
           );
           };
           
 const mapStateToProps = (state) => ({
    contacts: state,
     });
     const mapDispatchToProps = (dispatch) => ({
     updateEmployee: (data) => {
     dispatch({ type: "UPDATE_EMPLOYEE", payload: data });
   },
});
           
export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
                   
                  
           
