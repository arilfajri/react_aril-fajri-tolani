import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const DataProduct = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  return (
    <div className='card mt-5 m-auto shadow-sm' style={{ width:400 }}>
      <div className="card-body">
        <h5 className="card-title">Data Product</h5>
        <p className="card-text">Name : {data.name} </p>
        <p className="card-text">Category : {data.category} </p>
        <p className="card-text">Freshness : {data.freshness} </p>
        <p className="card-text">Image : {data.image} </p>
        <p className="card-text mb-2">Price : {data.price} </p>
        <button type='submit' className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  )
}

export default DataProduct
