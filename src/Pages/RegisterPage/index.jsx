import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./styles.module.css";

const RegisterPage = () => {
  const [responseData, setResponseData] = useState({
    responseText: "",
    responseClass: "",
  });
  // initialValue
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  // submit form data
  const onSubmit = (values) => {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        (response) => {
          setResponseData({
            responseText: response.data.message,
            responseClass: "alert alert-success",
          });
        },
        (error) => {
          setResponseData({
            responseText: "Register failed",
            responseClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
    // fetch("https://orca-app-jhg4l.ondigitalocean.app/api/auth/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // })
    //   .then((response) => {
    //     if (response.status === 201) {
    //       return response.json();
    //     } else {
    //       throw new Error(response.statusText);
    //     }
    //   })
    //   .then((json) => {
    //     setResponseData({
    //       responseText: "Register successfully",
    //       responseClass: "alert alert-success",
    //     });
    //   })
    //   .catch((error) => {
    //     setResponseData({
    //       responseText: "Register failes, try again",
    //       responseClass: "alert alert-danger",
    //     });
    //   });
  };

  // validations
  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    mobile: Yup.string().required("mobile is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
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
          <div  className={styles.wrapper}>
            <div class={responseData.responseClass} role="alert">
              {responseData.responseText}
            </div>
            <h2>Register</h2>
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

              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
