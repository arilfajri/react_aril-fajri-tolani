import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { gql } from "@apollo/client";
import { useMutation, useSubscription } from "@apollo/client";

const DataProduct = () => {
  const params = useParams();
  const location = useLocation();
  // const data = location.state;
  const navigate = useNavigate();

  const GET_PRODUCT_BYID = gql`
    subscription MySubscription($_eq: uuid!) {
      products_list(where: { id: { _eq: $_eq } }) {
        additionalDescription
        comment
        id
        imageProduct
        productCategory
        productName
        productPrice
        radioProduct
      }
    }
  `;

  const UPDATE_KOMENTAR = gql`
    mutation MyMutation2($_eq: uuid!, $comment: jsonb!) {
      update_products_list(
        where: { id: { _eq: $_eq } }
        _set: { comment: $comment }
      ) {
        returning {
          id
          comment
        }
      }
    }
  `;

  const { loading, error, data } = useSubscription(GET_PRODUCT_BYID, {
    variables: {
      _eq: params.id,
    },
  });

  const [
    updateKomentar,
    { data: komentarData, loading: komentarLoading, error: komentarError },
  ] = useMutation(UPDATE_KOMENTAR);

  const komentar = data?.products_list[0].comment || [];
  const formik = useFormik({
    initialValues: {
      komentar: "",
    },

    onSubmit: (values, { resetForm }) => {
      updateKomentar({
        variables: {
          _eq: params.id,
          comment: [...komentar, values.komentar],
        },
      });
      resetForm();
    },
  });

  return (
    <>
      <div className="card mt-5 m-auto shadow-sm" style={{ width: 400 }}>
        {data?.products_list.map((product) => (
          <div className="card-body" key={product.id}>
            <h5 className="card-title">Data Product</h5>
            <p className="card-text">Name : {product.productName} </p>
            <p className="card-text">Category : {product.productCategory} </p>
            <p className="card-text">Freshness : {product.radioProduct} </p>
            <p className="card-text">Image : {product.imageProduct} </p>
            <p className="card-text mb-2">Price : {product.productPrice} </p>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        ))}
      </div>
      <form className="d-flex py-4 ps-5 pe-5" onSubmit={formik.handleSubmit}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Comment"
          aria-label="Search"
          name="komentar"
          onChange={formik.handleChange}
          value={formik.values.komentar}
        />
        <button type="submit" className="btn btn-outline-primary">
          Comment
        </button>
      </form>
      {komentar.map((item, index) => (
        <div key={index}>
          <div className="card-body">
            <p className="card-text">Comment : {item} </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DataProduct;
