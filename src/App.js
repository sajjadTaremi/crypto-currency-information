import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CoinPage from "./Routes/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="/CoinPage/:id" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
