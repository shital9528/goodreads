import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProfilePage = () => {
  // initialValue
  const initialValues = {
    firstName: "",
    email: "",
   
  };

  // submit form data
  const onSubmit = (values) => {
    console.log(values);
  };

  // validations
  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div
            style={{
              background: "#fff",
              padding: "30px 40px",
              borderRadius: "10px",
              marginTop: "80px",
            }}
          >
            <h2>Profile Page</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

             

              <input
                type="submit"
                value="Update Profile"
                className="btn btn-primary btn-block"
                
              />
               <input
                type="submit"
                value="Change Password"
                className="btn btn-primary btn-block"
              />
               <input
                type="submit"
                value="Logout"
                className="btn btn-primary btn-block"
              />
            </form>
           
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default ProfilePage;
