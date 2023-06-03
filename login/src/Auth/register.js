import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../css/register.css";

const Register = (props) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('This field is required'),
      email: yup.string().email('Enter a valid email').trim().required('This field is required'),
      password: yup.string().trim().required('This field is required'),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('This field is required'),
    }),
    onSubmit: (data) => {
      console.log(data, 'data');
      toast.success("Registration Done");
      axios.post('http://localhost:5000/api/register', data)
        .then(res => {
          navigate('/login');
        })
    },
  });

  const handleBlur = (e) => {
    formik.handleBlur(e);
  };

  return (
    <div className="container">
      <div className="register-form">
        <h4 className='heading'>Register</h4>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="inputbox">
            <input
              name="name"
              placeholder='User Name'
              className="form-control"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </div>
          <div className="inputbox">
            <input
              name="email"
              placeholder='Email'
              className="form-control"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="inputbox">
            <input
              name="password"
              placeholder='Password'
              className="form-control"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="inputbox">
            <input
              name="confirmPassword"
              placeholder='Confirm Password'
              className="form-control"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="submit-button">Submit</button>
          <a
            href='#'
            className='route_link'
            onClick={() => {
              window.location.href = "login";
            }}
          >Login</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
