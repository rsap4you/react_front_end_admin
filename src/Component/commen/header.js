import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { useNavigate } from "react-router-dom";


import { logoutRedux } from '../../store/actions/userAction';

function Header() {
  const dispatch = useDispatch();
  const request = {}; // Define the request variable
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
   

    dispatch(logoutRedux(request)).then((result) => {
      if (result.payload.code === 200) {
// navigate here
    navigate("/");

      }
    });



  };

  const [sidebarSize, setSidebarSize] = useState('default');

    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : { name: 'Amarjeet' }; // Default value if not found
    const handleToggle = () => {
      // Access the <body> element and add the attribute
      const newSize = sidebarSize === 'default' ? 'condensed' : 'default';
      setSidebarSize(newSize);
      const contentWrappers = document.querySelectorAll('.simplebar-content-wrapper');
      contentWrappers.forEach((wrapper) => {
        wrapper.style.overflow = newSize === 'default' ? 'hidden' : 'scroll';
      });

      const elementsToAddClass = document.querySelectorAll('.simplebar-content-wrapper');
      elementsToAddClass.forEach((element) => {
        element.classList.add('amarjeet');
        element.classList.remove('simplebar-content-wrapper');
      });
  
    
      document.body.setAttribute('data-sidebar-size', newSize);
    }
    
  return (
    <>
      <div className="navbar-custom" style={{marginTop:"-74px"}}>
    <div className="container-fluid">
      <ul className="list-unstyled topnav-menu float-end mb-0">
        <li className="d-none d-lg-block">
          <form className="app-search">
     
          </form>
        </li>
      
       
        <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
          <a
            className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img
              src="../assets/images/flags/us.jpg"
              alt="user-image"
              height={16}
            />
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../assets/images/flags/germany.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">German</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../assets/images/flags/italy.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">Italian</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../assets/images/flags/spain.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">Spanish</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../assets/images/flags/russia.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">Russian</span>
            </a>
          </div>
        </li>
        <li className="dropdown notification-list topbar-dropdown">
          <a
            className="nav-link dropdown-toggle waves-effect waves-light"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="fe-bell noti-icon" />
            <span className="badge bg-danger rounded-circle noti-icon-badge">
              9
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-lg">
            {/* item*/}
            <div className="dropdown-item noti-title">
              <h5 className="m-0">
                <span className="float-end">
                  <a href="" className="text-dark">
                    <small>Clear All</small>
                  </a>
                </span>
                Notification
              </h5>
            </div>
            <div className="noti-scroll" data-simplebar="">
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item active"
              >
                <div className="notify-icon">
                  <img
                    src="../assets/images/users/user-1.jpg"
                    className="img-fluid rounded-circle"
                    alt=""
                  />{" "}
                </div>
                <p className="notify-details">Cristina Pride</p>
                <p className="text-muted mb-0 user-msg">
                  <small>Hi, How are you? What about our next meeting</small>
                </p>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon bg-primary">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">
                  Caleb Flakelar commented on Admin
                  <small className="text-muted">1 min ago</small>
                </p>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon">
                  <img
                    src="../assets/images/users/user-4.jpg"
                    className="img-fluid rounded-circle"
                    alt=""
                  />{" "}
                </div>
                <p className="notify-details">Karen Robinson</p>
                <p className="text-muted mb-0 user-msg">
                  <small>Wow ! this admin looks good and awesome design</small>
                </p>
              </a>
       
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon bg-warning">
                  <i className="mdi mdi-account-plus" />
                </div>
                <p className="notify-details">
                  New user registered.
                  <small className="text-muted">5 hours ago</small>
                </p>
              </a>
           
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">
                  Caleb Flakelar commented on Admin
                  <small className="text-muted">4 days ago</small>
                </p>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon bg-secondary">
                  <i className="mdi mdi-heart" />
                </div>
                <p className="notify-details">
                  Carlos Crouch liked
                  <b>Admin</b>
                  <small className="text-muted">13 days ago</small>
                </p>
              </a>
            </div>
            {/* All*/}
            <a
              href="javascript:void(0);"
              className="dropdown-item text-center text-primary notify-item notify-all"
            >
              View all
              <i className="fe-arrow-right" />
            </a>
          </div>
        </li>
        <li className="dropdown notification-list topbar-dropdown">
          <a
            className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img
              src="../assets/images/users/user-1.jpg"
              alt="user-image"
              className="rounded-circle"
            />
            <span className="pro-user-name ms-1">
            {userData.first_name} <i className="mdi mdi-chevron-down" />
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
            {/* item*/}
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-user" />
              <span>My Account</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-settings" />
              <span>Settings</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-lock" />
              <span>Lock Screen</span>
            </a>
            <div className="dropdown-divider" />
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-log-out" />
              <span  onClick={handleSubmit}>Logout</span>
            </a>
          </div>
        </li>
    
      </ul>
      {/* LOGO */}
      <div className="logo-box">
        <a href="index.html" className="logo logo-dark text-center">
          <span className="logo-sm">
            <img src="../assets/images/logo-sm.png" alt="" height={22} />
          
          </span>
          <span className="logo-lg">
            <img src="../assets/images/logo-dark.png" alt="" height={20} />
        
          </span>
        </a>
        <a href="index.html" className="logo logo-light text-center">
          <span className="logo-sm">
            <img src="../assets/images/logo-sm.png" alt="" height={22} />
          </span>
          <span className="logo-lg">
            <img src="../assets/images/logo-light.png" alt="" height={20} />
          </span>
        </a>
      </div>
      <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
        <li onClick={handleToggle}>
          <button className="button-menu-mobile waves-effect waves-light">
            <i className="fe-menu" />
          </button>
        </li>
        <li>
          {/* Mobile menu toggle (Horizontal Layout)*/}
          <a
            className="navbar-toggle nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
          >
            <div className="lines">
              <span />
              <span />
              <span />
            </div>
          </a>
          {/* End mobile menu toggle*/}
        </li>
  
      </ul>
      <div className="clearfix" />
    </div>
  </div>
    </>
  )
}

export default Header