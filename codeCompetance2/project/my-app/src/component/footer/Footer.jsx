import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white pt-5 pb-4" id="footer">
        <div className="container text-md-left">
          <div className="row text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Aril Movie
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                expedita itaque laborum consectetur reprehenderit blanditiis aperiam
                voluptatibus dicta minus quas.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Social Media
              </h5>
              <p>
                <a
                  href="https://twitter.com/areel_tolani"
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: 20, textDecoration: "none" }}
                >
                  <i className="fab fa-twitter" /> areel_tolani
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/_aareel/"
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: 20, textDecoration: "none" }}
                >
                  <i className="fab fa-instagram" /> _aareel
                </a>
              </p>
              <p>
                <a
                  href="https://www.tiktok.com/@areel_f"
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: 20, textDecoration: "none" }}
                >
                  <i className="fab fa-tiktok" /> areel_f
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="fas fa-home mr-3" /> Bandung, Jawa Barat Indonesia
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> arielmunchen60@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> +62 82188216081
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-lg-12">
              <p>
                {" "}
                Copyright ©2023 All rights reserved by:
                <strong className="text-warning">Aril Fajri Tolani</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
