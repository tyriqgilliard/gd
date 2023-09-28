import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="app">
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart"
                element={<Cart />} />
            <Route path="/login"
                element={<Login />} />
            <Route path="/register"
                element={<Register />} />
            <Route path="/allproducts"
                element={<ProductList />} />
            <Route path="/product"
                element={<ProductPage />} />
        </Routes>
    </Router>
</div>
  )
};

export default App;