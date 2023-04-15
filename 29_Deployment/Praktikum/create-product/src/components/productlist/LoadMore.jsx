import React from "react";
import { useSubscription, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_PRODUCT = gql`
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

const LoadMore = () => {
  const { loading, error, data } = useSubscription(GET_PRODUCT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <>
      <div className="row text-center pb-5">
        <h2 className="pt-5 pb-2">Product List</h2>
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
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm" key={product.id}>
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
                      className="btn btn-primary"
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
      <div className="text-center pb-5">
        <Link to={`/`} className="btn btn-danger">
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

export default LoadMore;
