import React from 'react'
import { Link } from 'react-router-dom'

function Leftsidebar() {
  return (
    <>


      <div className="left-side-menu" style={{marginLeft:"0px"}}>
    <div className="h-100" data-simplebar="">
      {/* User box */}
      <div className="user-box text-center">
        <img
          src="../assets/images/users/user-1.jpg"
          alt="user-img"
          title="Mat Helme"
          className="rounded-circle avatar-md"
        />
        <div className="dropdown">
          <a
            href="javascript: void(0);"
            className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
            data-bs-toggle="dropdown"
          >
            Geneva Kennedy
          </a>
          <div className="dropdown-menu user-pro-dropdown">
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-user me-1" />
              <span>My Account</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-settings me-1" />
              <span>Settings</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-lock me-1" />
              <span>Lock Screen</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-log-out me-1" />
              <span>Logout</span>
            </a>
          </div>
        </div>
        <p className="text-muted">Admin Head</p>
      </div>
      {/*- Sidemenu */}
      <div id="sidebar-menu">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/datatable" className="nav-link">
            <i className="fas fa-users"></i> <span className="d-none d-sm-inline">&nbsp;&nbsp;&nbsp;User Listing</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faq" className="nav-link">
          <i class="fas fa-question-circle"></i><span className="d-none d-sm-inline">&nbsp;&nbsp;&nbsp;Faq</span>
          </Link>
        </li>
      </ul>
    </div>
      {/* End Sidebar */}
      <div className="clearfix" />
    </div>
    {/* Sidebar -left */}
  </div>
    </>
  )
}

export default Leftsidebar