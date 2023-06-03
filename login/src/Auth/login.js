import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/login.css";

const Login = (props) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Enter a valid email")
        .trim()
        .required("This field is required"),
      password: yup.string().trim().required("This field is required"),
    }),
    onSubmit: (data) => {
      console.log(data, "data");
      axios
        .post("http://localhost:5000/api/login", data)
        .then((res) => {
          localStorage.setItem("auth", JSON.stringify(res.data));
          toast.success("Welcome Home");
          navigate("/dashboard");
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });
  return (
    <div>
      <div className="login-form">
        <div className="heading">Login</div>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="inputbox">
            <input
              name="email"
              placeholder="Email"
              className="form-control"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="inputbox">
            <input
              name="password"
              placeholder="Password"
              className="form-control"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
          <a
            className="route_link"
            href="#"
            onClick={() => {
              window.location.href = "register";
            }}
          >
            Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
