import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [responseData, setResponseData] = useState({
    responseText: "",
    responseClass: "",
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login", values)
      .then(
        (response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          setResponseData({
            responseClass: "alert alert-success",
            responseText: "login success, thank you",
          });
        },
        (error) => {
          console.log(error);
          setResponseData({
            responseClass: "alert alert-danger",
            responseText: error.response.data.message,
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2 className="text-center">
            <Link to="/">GoodRead</Link>
          </h2>

          <div className={styles.wrapper}>
            <div className={responseData.responseClass}>
              {responseData.responseText}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <Field
                        name="email"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <input
                      type="submit"
                      value="Login"
                      disabled={!formik.isValid}
                      className="btn btn-primary btn-block"
                    />
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center">
              New users? <a href="/register">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
