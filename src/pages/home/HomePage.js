import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import Navbar from '../../features/navbar/Navbar'
import Store from '../store/Store'
import serviceCallApi from "../../services/serviceApi";

const HomePage = () => {
  const info = localStorage.getItem("userInfo")
  let userInfo = JSON.parse(info)
  // console.log("🚀 ~ file: HomePage.js ~ line 11 ~ HomePage ~ userInfo", userInfo)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)


  const logout = () => {
    // call Api logout, logout server

    // Remove browser

    setLoading(true)
    setTimeout(() => {
      localStorage.removeItem("userInfo")

      navigate('/')
      setLoading(false)
    }, 1000)


  }


  // // useEffect
  // useEffect(() => {
  //   getProductList()
  // }, [])

  // const [data, setData] = useState([]);


  // // function callApi
  // const getProductList = async () => {
  //   const categoryId = 3;
  //   const response = await serviceCallApi(`products?page=1&limit=10&id=${categoryId}`, 'GET')
  //   console.log("🚀 ~ file: HomePage.js ~ line 44 ~ getProductList ~ response", response.data.data)
  //   setData(response.data.data)
  // }

  // const renderProduct = () => {
  //   data.map((item, index) => {

  //   })
  // }

  return (
    <div className="">
      {/* navbar */}
      <Navbar />

      {/* store */}
      <Store />

      {/* welcome Homepage - login */}
      <div className="homepage-welcome">
        <h1>Welcome to the homepage</h1>
        <button>Click here</button>
      </div>

      {userInfo ? (
        <>
          <h2>{userInfo.name}</h2>
          <button onClick={() => { logout() }}>Logout</button>
          {loading ? (
            <ReactLoading type="spin" color="pink" width="39%" height="39%" />
          ) : (
            null
          )}


        </>
      ) : (
        null
      )}

      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;