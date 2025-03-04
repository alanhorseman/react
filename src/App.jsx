import { NavBar } from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { ProductDetail } from './views/ProductDetail';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Home />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="*" element="404 NOT FOUND" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
