import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
      // initial values
      initialValues: {
          firstname: '',
          lastname: '',
          email: '',
          message: ''
      },
      // validation schema
      validationSchema: Yup.object({
          firstname: Yup.string()
              .min(3, 'First name minimum 3 characters')
              .required(),
          lastname: Yup.string()
              .min(3, 'Last name minimum 3 characters')
              .required(),
          email: Yup.string()
              .required()
              .email('Invalid email format'),
          message: Yup.string()
              .required()
      }),
      // handle submission
      onSubmit: (values) => {
        formik.resetForm();
        console.log('values', (values))
        alert("First Name : " + values.firstname + "\nLast Name : " + values.lastname + "\nEmail : " + values.email + "\nMessage : " + values.message)
      }
  });
  return (
    <div>
      <div className="container pt-5 pb-5" id='contact'>
        <div className="row">
          <div className="col text-center mb-5">
            <h1 className="kontak">Contact</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card text-white bg-primary mb-3 text-center">
              <div className="card-body bg-dark">
                <i className="fa fa-envelope-o fa-2x mb-2" />
                <h3 className="card-title">Contact Info</h3>
              </div>
            </div>
            <ul className="list-group text-center">
              <li className="list-group-item">
                <h1 className="location">Location</h1>
              </li>
              <li className="list-group-item">Our Addres</li>
              <li className="list-group-item">Bandung</li>
              <li className="list-group-item">Jawa Barat, Indonesia</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="form-control" name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
                {formik.touched.firstname && formik.errors.firstname && <div className='error text-danger'>{formik.errors.firstname}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="form-control" name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
                {formik.touched.lastname && formik.errors.lastname && <div className='error text-danger'>{formik.errors.lastname}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email && <div className='error text-danger'>{formik.errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && <div className='error text-danger'>{formik.errors.message}</div>}
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-secondary mt-3"
                  id="submit-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
