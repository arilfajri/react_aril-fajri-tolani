import React from 'react'

function Table() {
  return (
    <div>
      <table className="table table-striped mt-3" id="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Image of Product</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Additional Description</th>
            <th scope="col">Product Price</th>
          </tr>
        </thead>
        <tbody id="table-body">
          <tr>
            <td hidden="" />
            <td hidden="" />
            <td hidden="" />
            <td hidden="" />
            <td hidden="" />
            <td hidden="" />
            <td hidden="" />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table