import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { ProductDetail } from "./views/ProductDetail/ProductDetail";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element="404 NOT FOUND" />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
