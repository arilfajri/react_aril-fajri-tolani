import React from 'react'

const HeaderLandingPage = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg shadow fixed-top bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Simple Header
            </a>
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
              <ul className="navbar-nav gap-3 text-sm-center mt-lg-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderLandingPage
