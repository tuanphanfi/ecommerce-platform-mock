import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const info = localStorage.getItem("userInfo")
  console.log("~ file: Hompage.js ~ line 5 ~ HomePage ~ info", info)
  return (
    <div>
      <h1>Home Page</h1>
      <h2>{info}</h2>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;