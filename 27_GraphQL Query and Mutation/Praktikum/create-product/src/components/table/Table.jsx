import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../config/Product/ProductThunk";
import { useMutation, useSubscription } from "@apollo/client";

import { gql, useQuery } from "@apollo/client";

// export const GET_PRODUCT = gql`
//   query GetProductsList {
//     products_list {
//       productPrice
//       additionalDescription
//       imageProduct
//       productCategory
//       productName
//       radioProduct
//       id
//     }
//   }
// `;

export const GET_PRODUCT = gql`
  subscription MySubscription {
    products_list {
      additionalDescription
      id
      imageProduct
      productCategory
      productName
      productPrice
      radioProduct
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation MyMutation($id: uuid!) {
    delete_products_list_by_pk(id: $id) {
      id
    }
  }
`;

function Table({ handleSetEdit }) {
  const { loading, error, data } = useSubscription(GET_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct({ variables: { id } });
    }
  };
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
          {data.products_list.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`/account/${product.id}`}>{product.id}</Link>
              </td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.radioProduct}</td>
              <td>{product.imageProduct}</td>
              <td>{product.productPrice}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteProduct(product.id)}
                  // {() => {
                  //   if (
                  //     window.confirm(
                  //       "Are you sure you want to delete this product?"
                  //     )
                  //   ) {
                  //     deleteUser({ variables: product.id });
                  //   }
                  // }}
                >
                  Delete
                </button>
                {/* <input
                      type='text'
                      placeholder='Product Name'
                      onChange={
                        (e) => {
                          setEditName(e.target.value)
                        }
                    } /> */}
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleSetEdit(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
