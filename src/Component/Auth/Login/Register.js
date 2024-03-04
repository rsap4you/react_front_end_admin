import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { registerRedux } from '../../../store/actions/userAction';
// import logo from '../../utils/image/logo.jpeg';
// import 'bootstrap/dist/css/bootstrap.min.css';


function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile_number: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputValue =  value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, mobile_number, password, first_name, last_name } = formData;

    // Validate mobile_number
    if (!mobile_number || mobile_number.trim() === "") {
      // Handle validation error, maybe show a message to the user
      console.error("Mobile Number is required");
      return;
    }

    let request = {
      first_name: first_name,
      mobile_number: mobile_number,
      last_name: last_name,
      email: email,
      password: password
    };

    dispatch(registerRedux(request)).then((result) => {
      if (result.payload.code === 200) {
        // Show success message with toastr
        // toastr.success('Registration successful!', 'Success');
    
        // navigate here
        navigate("/login");
      }
    });
    
  };

  return (
    <>
    <div style={{padding:"8%"}}> 
      <div className='div_container' >
        <form onSubmit={handleSubmit} className="custom-form" style={{backgroundColor:"#e3e3e3",width:"40%",padding:"2%",marginLeft:"30%",height:"50vh",borderRadius:"10px"}}>
        {/* <img src={logo} alt="Logo" style={{ width: "15%" }} /> */}
          <div className="row" >
            <div className="col-md-6 mb-3">
              <label htmlFor="inputFirstName">FIRST NAME</label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="First name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputLastName">LAST NAME</label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Last name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputMobile">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="inputMobile"
                placeholder="Mobile Number"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{textAlign:"left"}}>
            Sign Up
          </button>
        </form>
      </div>
      </div>
    </>
  );
}

export default RegisterPage;
