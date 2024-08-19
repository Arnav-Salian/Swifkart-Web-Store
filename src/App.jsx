import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Error404 from "./components/Error404";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes> 
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        <Footer/>
        <Toaster position="bottom-right" reverseOrder={false} />
      </BrowserRouter>
    </>
  )
}

export default App
