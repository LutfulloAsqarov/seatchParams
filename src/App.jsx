import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Home from "./pages/home/Home";
import ProductDetail from "./components/product-detail/ProductDetail";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/single/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
}

export default App;
