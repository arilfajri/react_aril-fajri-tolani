import React from 'react';
import { Link } from 'react-router-dom';

function Table({productData, handleDelete, handleEdit}) {
  return (
        <div>
          <table className="table table-striped mt-3" id="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
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
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.freshness}</td>
                  <td>{product.price}</td>
                  <td>
                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                    <button type="button" className="btn btn-success" onClick={() => handleEdit(product.id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      )

  }

export default Table
