import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductSlice from '../../config/Product/ProductSlice';
import { useDispatch } from 'react-redux';

function Table({productData, handleDelete}) {
  const dispatch = useDispatch();
  const [editName, setEditName] = useState("");
  return (
        <div>
          <table className="table table-striped mt-3" id="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody id="table-body">
            {productData.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link to={`/account/${product.id}`} state={product}>
                      {product.id}
                    </Link>
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.radioProduct}</td>
                  <td>{product.imageProduct}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                    <input
                      type='text'
                      placeholder='Product Name'
                      onChange={
                        (e) => {
                          setEditName(e.target.value)
                        }
                    } />
                    <button type="button" className="btn btn-success" onClick={() =>{
                      dispatch(
                        ProductSlice.actions.update({
                          id: product.id,
                          productName: editName
                        })
                      )
                    }}>
                      Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      )

  }

export default Table
