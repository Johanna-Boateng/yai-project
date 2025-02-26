import "./App.css";
import AboutUs from "./pages/about/page";
import HomePage from "./pages/home/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/products/page";
import Contact from "./pages/contact/contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
