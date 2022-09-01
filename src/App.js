
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  });

  const [Submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstName = (e) => {
    setValues({...values, firstname: e.target.value})
    setSubmit(false);
  }
  const handleLastName = (e) => {
    setValues({...values, lastname: e.target.value})
    setSubmit(false);
  }
  const handleEmail = (e) => {
    setValues({...values, email: e.target.value})
    setSubmit(false);
  }
  const handlePassword = (e) => {
    setValues({...values, password: e.target.value})
    setSubmit(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstname && values.lastname && values.email){
      setValid(true);
    }
    setSubmit(true);

  }
  const handleError = (e) => {
    e.preventDefault();
    setValues(null);
  }

  const handleCancel = (e) =>{
    e.target.reset();
  }

  return (
    <div className="Form-container">
      <div>
        <h1>Student Registration Form</h1>
      </div>
      {Submit && valid?<div className='success-messages'>
        Dear User {values.firstname} Your info is successfully registered!!
      </div> : null}

      <form className='forms' onSubmit={handleSubmit && handleError}>
          <div>
            <label className='label' htmlFor="firstname">First Name: </label>
            <input type="text"
            placeholder="First Name"
            className="input" 
            value={values.firstname}
            onChange={handleFirstName}
            name="FirstName" id="Firstname"/>
            {Submit && !values.firstname? <span>Please enter the First Name</span>: null}
          </div>
          <br></br>
  
          <div>
            <label className='label' htmlFor="lastname">Last Name: </label>
            <input type="text"
            placeholder="Last Name"
            className="input" 
            value={values.lastname}
            onChange={handleLastName}
            name="LastName" id="lastname"/>
            {Submit && !values.lastname? <span>Please enter the Last Name</span> : null}
          </div>
          <br></br>
  
          <div>
            <label className='label' htmlFor="email">Email: </label>
            <input type="text"
            placeholder="Email" 
            className="input"
            value={values.email}
            onChange={handleEmail}
            name="email" id="email"/>
            {Submit && !values.email? <span>Please enter the Email</span>: null}
          </div>
          <br></br>
  
          <div>
            <label className='label' htmlFor="password">Password: </label>
            <input type="password" autocomplete="off" 
            placeholder="Password"
            className="input"
            value={values.password}
            onChange={handlePassword}
            name="password" id="password"/>
            {Submit && !values.password? <span>Please enter the Password</span>: null}
          </div>
          <br></br>

          <button onClick={handleSubmit} className="btn" type="submit">Register</button>
          <button onClick={handleCancel} className="btn btn-danger" margin-left="" >Cancel</button>

      </form>
    </div>
  );
}
export default App;
