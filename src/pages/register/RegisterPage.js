import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import serviceCallApi from "../../services/serviceApi";

import { useForm } from "react-hook-form";
import FromRegister from '../../features/Register/FromRegister'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    setLoading(true)
    // setTimeout(() => {
    //   navigate('/')
    //   setLoading(false)
    // }, 1000)
    try {
      const result = await serviceCallApi("register", "POST", data)
      console.log("~file: Register.js ~line 20~ result", result)
      setLoading(false)
      navigate('/login')

    } catch (error) {
      alert(error.message)
      setLoading(false)

    }
  }


  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <h1 className="">Register</h1>
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                {loading ? (
                  <div className="d-flex justify-content-center">
                    <ReactLoading type="spin" color="yellow" width="39%" height="39%" />
                  </div>
                ) : (
                  <FromRegister onSubmit={onSubmit} />
                )}

              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Already have an account? <Link to="/login" className="text-dark">Login</Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright © 2017-2021 — Your Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;