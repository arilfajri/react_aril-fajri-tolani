import React from 'react'
import logo from "../../assets/img/aril.png"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow fixed-top bg-dark"data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="60px" />
          </a>
          <h2 className="mt-2 judul"> Movie</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end round"
            id="navbarNavDropdown"
          >
            <ul
              className="navbar-nav gap-3 text-sm-center mt-lg-auto"
              style={{ marginRight: 50, fontSize: 20 }}
            >
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Footer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
