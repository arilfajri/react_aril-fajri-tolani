import React, { useState } from 'react';

function Form() {
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account"
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    }
  };

  const [productName, setProductName] = useState('');
  const handleProductNameChange = (event) => {
    const value = event.target.value;
    if (value.length <= 10) {
      setProductName(value);
    } else {
      alert("Product Name tidak boleh melebihi 10 karakter")
    }
  };

  return (
    <div>
      <section>
        <form action="" name="form">
          <div className="container text-center">
            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Logo Bootstrap" width="71.53px"/>
            <h2 className="mt-3"> {article.title.en} </h2>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <p className="text-center">
                {article.description.en}
              </p>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row mt-5">
            <div className="col-4"></div>
            <div className="col-4">
              <h4>Detail Product</h4>
              <label htmlFor="product">Product Name</label>
              <br />
              <input
                type="text"
                className="form-control mt-2 detail-product"
                id="productName"
                aria-describedby="textHelp"
                name="productName"
                value={productName}
                onChange={handleProductNameChange}
                required=""
              />

            </div>
            <div className="col-4"></div>
          </div>
          <div className="row mt-4">
            <div className="col-4"></div>
            <div className="col-4">
              <label htmlFor="product">Product Category</label>
              <select
                className="form-select category-product"
                aria-label="Default select example"
                name="productcategory"
                id="productcategory"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose..
                </option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>

            </div>
            <div className="col-4"></div>
          </div>
          <div className="row mt-4">
            <div className="col-4"></div>
            <div className="col-4">
              <label htmlFor="formFile" className="form-label">
                Image of Product
              </label>
              <input
                className="form-control image-product"
                type="file"
                id="image-product"
                height="32px"
                width="200px"
                name="image-product"
                required=""
              />

            </div>
            <div className="col-4"></div>
          </div>
          <br />
          <div className="row ">
            <div className="col-4"></div>
            <div className="col-4">
              <label htmlFor="freshness">Product Freshness</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioproduct"
                  defaultValue="Brand New"
                  required=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Brand New
                </label>

              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioproduct"
                  defaultValue="Second Hand"
                  required=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Second Hand
                </label>

              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioproduct"
                  defaultValue="Refurbished"
                  required=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Refurbished
                </label>

              </div>
              <div className="col-4"></div>
            </div>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <label htmlFor="description">Additional Description</label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="description"
                    style={{ height: 100 }}
                    required=""
                    defaultValue={""}
                  />
                  <label htmlFor="floatingTextarea2" />

                </div>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row mt-4">
              <div className="col-4"></div>
              <div className="col-4">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  className="form-control mt-2 "
                  id="productprice"
                  aria-describedby="textHelp"
                  placeholder="$ 1"
                  required=""
                />
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Form
