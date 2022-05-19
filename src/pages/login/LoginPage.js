import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom";
import FormLogin from '../../features/login/FromLogin'
import serviceCallApi from "../../services/serviceApi";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const onSubmit = async data => {
    setLoading(true);

    try {
      const result = await serviceCallApi("login", "POST", data)

      console.log("~file: Login.js ~line 20~ result", result)
      console.log("data:", result.data.data)
      setLoading(false)
      navigate('/')
      localStorage.setItem("userInfo", JSON.stringify(result.data.data))
    } catch (e) {
      setLoading(false)
      alert(e.message)
    }

    //after successfully calling API, back to home, and save clients info into LocalStorage

    // Using redux toolkit dispatch Action login success => return => localStorage

    // When logging out, clear/delete LocalStorage
  };
  const [loading, setLoading] = useState(false);

  // test
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (

    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <h1>Login</h1>
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5 ">
                {
                  loading ? (
                    <div className="d-flex justify-content-center">
                      <ReactLoading className="" type="spin" color="blue" height={'39%'} width={'39%'} />
                    </div>
                  ) : (

                    <FormLogin onSubmit={onSubmit} />)
                }


              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Not have an account? <Link className="text-dark" to="/register">Register</Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright © 2017-2021 — Your Company
            </div>
          </div>
        </div>
      </div >

    </section >
  );
};

export default LoginPage;