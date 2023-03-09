import React, { Component } from 'react'

export default function Navbar() {
  const change = (e) => {
    e.preventDefault()
    if (document.body.classList.contains("sidebar-mini") && screen.width > 1024){
      document.body.classList.remove("sidebar-mini")
    } else if (!document.body.classList.contains("sidebar-mini") && screen.width > 1024) {
      document.body.classList.add("sidebar-mini")
    } else if (document.body.classList.contains("sidebar-gone") && screen.width <= 1024) {
      document.body.classList.add("sidebar-show")
      document.body.classList.remove("sidebar-gone")
    } else if (document.body.classList.contains("sidebar-show") && screen.width <= 1024) {
      document.body.classList.remove("sidebar-show")
      document.body.classList.add("sidebar-gone")
    }
  }

  return (
    <div>
      <div className="navbar-bg"></div>
      <nav className="navbar main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li>
              <a data-toggle="sidebar" onClick={change} className="nav-link nav-link-lg">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
            {/* <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" /> */}
            <div className="d-sm-none d-lg-inline-block">Hi, Admin</div></a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt" /> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}