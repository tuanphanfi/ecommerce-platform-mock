import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import DetailPage from "./pages/detail/DetailProduct";
import TestSearch from './pages/TestSearch'

function Routing() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/testSearch" element={<TestSearch />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/:product_id/:slug" element={<DetailPage />} />
    </Routes>
    // react router v6
  );
}
export default Routing;
