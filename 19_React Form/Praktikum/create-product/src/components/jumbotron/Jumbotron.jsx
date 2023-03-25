import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../img/assets/img/img.png"

const Jumbotron = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-f">
        <h1 className="text-white">
          Better Solution For Your <br /> Bussiness
        </h1>
        <p>
          We are team of talented designers making websites with <br /> Bootstrap
        </p>
        <img src={logo} alt="" className="img" />
        <button className="getstarted" onClick={() => navigate('/createproduct')}>Create Product</button>
        <button className="video">Watch Video</button>
      </div>
    </div>
  )
}

export default Jumbotron
