import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container2 d-flex justify-content-center">
          <div className="footer-col">
            <h4>ARSHA</h4>
            <ul>
              <li style={{ listStyle: "none" }}>
                <a href="#">A108 Adam Street</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">New York, NY 535022</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">United States</a>
              </li>
              <br />
              <li style={{ listStyle: "none" }}>
                <a href="#">
                  <strong>Phone :</strong>+1 5589 55488 55
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">
                  <strong>Email :</strong>info@example.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li style={{ listStyle: "none" }}>
                <a href="#">Home</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">About us</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">Services</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">Terms of service</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li style={{ listStyle: "none" }}>
                <a href="#">Web Design</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">Web Development</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">Product Management</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">Marketing</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Social Networks</h4>
            <p className="sosial-media">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
              valies
            </p>
            <div className="social-media">
              <a href="#">
                <i />
              </a>
              <a href="#">
                <i />
              </a>
              <a href="#">
                <i />
              </a>
              <a href="#">
                <i />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer id="footer">
        <p className="copyright">
          © Copyright <strong>Arsha</strong> All Right Reserved
        </p>
        <p className="design">Design by. Bootstrapmade</p>
      </footer>
    </>

  )
}

export default Footer
