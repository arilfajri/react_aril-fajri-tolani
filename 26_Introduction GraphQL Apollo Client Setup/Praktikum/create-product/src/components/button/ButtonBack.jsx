import React from 'react'
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center mt-5">
        <button
          type="submit"
          className="btn btn-warning submit"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => navigate('/')}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default ButtonBack
