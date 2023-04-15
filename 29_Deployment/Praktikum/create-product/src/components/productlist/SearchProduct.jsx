import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchProduct = () => {
  const params = useParams();
  const SEARCH_PRODUCT = gql`
    query SearchProduct($_ilike: String!) {
      products_list(where: { productName: { _ilike: $_ilike } }) {
        id
        productName
        additionalDescription
        productCategory
        radioProduct
        imageProduct
        productPrice
      }
    }
  `;

  const { loading, error, data } = useQuery(SEARCH_PRODUCT, {
    variables: { _ilike: params.name },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <>
      <div className="row text-center pb-5">
        <h2 className="pt-5 pb-2">Search Product</h2>
        {data.products_list.map((product) => (
          // <div className="col-md-4 justify-content-center" key={product.id}>
          //   <div className="card">
          //     <img src="" className="card-img-top" alt="..." />
          //     <div className="card-body">
          //       <p className="card-text">{product.productName}</p>
          //       <Link
          //         to={`/account/${product.id}`}
          //         state={product}
          //         className="btn btn-primary"
          //       >
          //         Detail
          //       </Link>
          //     </div>
          //   </div>
          // </div>
          <div className="col-md-4" key={product.id}>
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height={225}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>{product.productName}</title>
                <rect width="100%" height="100%" fill="#55595c" />
              </svg>
              <div className="card-body">
                <p className="card-text">{product.productName}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to={`/account/${product.id}`}
                      state={product}
                      className="btn btn-outline-secondary"
                    >
                      Detail
                    </Link>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-3">
        <Link to={-1} className="btn btn-danger">
          Back
        </Link>
      </div>
      {/* <section className="product">
        <div className="container">
          <h2>PRODUCT LIST</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Detail View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Detail View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Detail View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loadmore d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" type="button">
              Load More ...
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default SearchProduct;
