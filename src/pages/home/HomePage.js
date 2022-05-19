import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import Navbar from '../../features/navbar/Navbar'

const HomePage = () => {
  const info = localStorage.getItem("userInfo")
  let userInfo = JSON.parse(info)
  console.log("~ file: Hompage.js ~ line 5 ~ HomePage ~ info", userInfo)
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

  return (
    <div className="homepage">
      {/* navbar */}
      <Navbar />
      <h1>Home Page</h1>
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