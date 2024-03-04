import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginRedux } from '../../../store/actions/userAction';



const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    console.log('value++++++++++++++++++', value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, } = formData;

    let request = {

      email: email,
      password: password
    };
console.log('requwest =================>?,',request);


    dispatch(loginRedux(request)).then((result) => {
      if (result.payload.code === 200) {
     

        // navigate here
        navigate("/dashboard");
      }
    });



  };


  return (
    <>
      <div className="account-pages mb-5" style={{ marginTop: '225px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card bg-pattern">
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <div className="auth-logo">
                      <a href="index.html" className="logo logo-dark text-center">
                        <span className="logo-lg">
                          <img
                            src="../assets/images/logo-dark.png"
                            alt=""
                            height={22}
                          />
                        </span>
                      </a>
                      <a href="index.html" className="logo logo-light text-center">
                        <span className="logo-lg">
                          <img
                            src="../assets/images/logo-light.png"
                            alt=""
                            height={22}
                          />
                        </span>
                      </a>
                    </div>
                    <p className="text-muted mb-4 mt-3">
                      Enter your email address and password to access admin panel.
                    </p>
                  </div>
                  <form action="#" onSubmit={handleSubmit} >
                    <div className="mb-3">
                      <label htmlFor="emailaddress" className="form-label">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="emailaddress"
                        required=""
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <div className="input-group-text" data-password="false">
                          <span className="password-eye" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-signin"
                          defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="checkbox-signin">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="text-center d-grid">
                      <button className="btn btn-primary" type="submit">
                        {" "}
                        Log In{" "}
                      </button>
                    </div>
                  </form>
                  <div className="text-center">


                  </div>
                </div>{" "}
             
              </div>
          
              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p>
                    {" "}
                    <a href="auth-recoverpw.html" className="text-white-50 ms-1">
                      Forgot your password?
                    </a>
                  </p>
                  <p className="text-white-50">
                    Don't have an account?{" "}
                    <a href="auth-register.html" className="text-white ms-1">
                      <b>Sign Up</b>
                    </a>
                  </p>
                </div>{" "}

              </div>

            </div>{" "}

          </div>

        </div>

      </div>


    </>
  )
}

export default Login