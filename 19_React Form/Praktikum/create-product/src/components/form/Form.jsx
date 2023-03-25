import React, { useState } from 'react';
import ButtonForm from '../button/ButtonForm';
import { v4 as uuidv4 } from 'uuid';
import Table from '../table/Table';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form = () => {
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

  // const handleProductNameChange = (event) => {
  //   const value = event.target.value;
  //   if (value.length <= 10) {
  //     setProductName(value);
  //   } else {
  //     alert("Product Name tidak boleh melebihi 10 karakter")
  //   }
  // };

  const [productData, setProductData] = useState([]);

  // const handleProductSubmit = (event) => {
  //   event.preventDefault();

  //   const newProduct = {
  //     id: uuidv4(),
  //     name: productName,
  //     category: productCategory,
  //     freshness: productFreshness,
  //     price: productPrice
  //   };

  //   setProductData([...productData, newProduct]);
  //   setProductName('');
  //   setProductCategory('');
  //   setProductFreshness('');
  //   setProductPrice('');
  // };

  const handleDelete = (productId) =>
  {if (window.confirm('Are you sure you want to delete this product?')) {
    setProductData(productData.filter((product) => product.id !== productId));
  }
  };

  const formik = useFormik({
    initialValues: {
      productName: '',
      productCategory: '',
      imageProduct: '',
      radioProduct: '',
      productPrice: ''
    },

    validationSchema: Yup.object({
      productName: Yup.string()
      .max(10, 'Maximum 10 characters')
      .required('Product Name is a required field'),
      productCategory: Yup.string()
      .required('Product Category is a required field'),
      imageProduct: Yup.string()
      .required('Product Image is a required field'),
      radioProduct: Yup.string()
      .required('Product Freshness is a required field'),
      productPrice: Yup.number()
      .positive('Product Price must be a positive number')
      .required('Product Price is a required field')
    }),

    onSubmit: (values) => {
      formik.resetForm();
      console.log('form values', (values))
      const newProduct = {
        id: uuidv4(),
        name: (values.productName),
        category: (values.productCategory),
        freshness: (values.radioProduct),
        image : (values.imageProduct),
        price: (values.productPrice)
      };

      setProductData([...productData, newProduct]);
    }
  })

  return (

    <div>
      <section>
        <form onSubmit={formik.handleSubmit} name="form">
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
                value={formik.values.productName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.productName && formik.errors.productName && <div className='error text-danger'>{formik.errors.productName}</div>}
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
                name="productCategory"
                id="productcategory"
                onBlur={formik.handleBlur}
                value={formik.values.productCategory}
                onChange={formik.handleChange}
              >
                <option selected="" disabled="" value="">
                  Choose..
                </option>
                <option value={"One"}>One</option>
                <option value={"Two"}>Two</option>
                <option value={"Three"}>Three</option>
              </select>
              {formik.touched.productCategory && formik.errors.productCategory && <div className='error text-danger'>{formik.errors.productCategory}</div>}
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
                accept='image/png, image/jpg, image/jpeg'
                id="image-product"
                height="32px"
                width="200px"
                name="imageProduct"
                onBlur={formik.handleBlur}
                value={formik.values.imageProduct}
                onChange={formik.handleChange}
              />
              {formik.touched.imageProduct && formik.errors.imageProduct && <div className='error text-danger'>{formik.errors.imageProduct}</div>}
            </div>
            <div className="col-4"></div>
          </div>
          <br />
          <div className="row ">
            <div className="col-4">
              <label htmlFor="freshness">Product Freshness</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioProduct"
                  defaultValue="Brand New"
                  onBlur={formik.handleBlur}
                  checked={formik.values.picked}
                  onChange={formik.handleChange}
                  />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Brand New
                </label>

              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioProduct"
                  defaultValue="Second Hand"
                  checked={formik.values.picked}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Second Hand
                </label>

              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioProduct"
                  defaultValue="Refurbished"
                  checked={formik.values.picked}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Refurbished
                </label>
              </div>
              {formik.touched.radioProduct && formik.errors.radioProduct && <div className='error text-danger'>{formik.errors.radioProduct}</div>}
              <div className="col-4"></div>
            </div>
            {/* <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <label htmlFor="description">Additional Description</label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Leave a comment here"
                    id="description"
                    style={{ height: 100 }}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="floatingTextarea2" />

                  {formik.touched.description && formik.errors.description && <div className='error text-danger'>{formik.errors.description}</div>}
                </div>
              </div>
              <div className="col-4"></div>
            </div> */}
            <div className="row mt-4">
              <div className="col-4"></div>
              <div className="col-4">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  name='productPrice'
                  className="form-control mt-2 "
                  id="productprice"
                  aria-describedby="textHelp"
                  placeholder="$ 1"
                  onBlur={formik.handleBlur}
                  value={formik.values.productPrice}
                  onChange={formik.handleChange}
                />
                {formik.touched.productPrice && formik.errors.productPrice && <div className='error text-danger'>{formik.errors.productPrice}</div>}
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          <ButtonForm
            disabled={formik.isSubmitting}
          />
        </form>
        </section>
        <Table
          productData= {productData}
          handleDelete= {handleDelete}
        />
      </div>
  )
}

export default Form
