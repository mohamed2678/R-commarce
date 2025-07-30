import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/Home/Home";
import ProductsDetails from "./page/ProductDetails/ProductsDetails";
import Cart from "./page/Cart/CartPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      
  <Toaster
      position="bottom-right"
      reverseOrder={false} 
      toastOptions={{
        style: {
            background: '#e9e9e9',
            padding: '15px',
            borderRadius: '8px',
          }
        
      }}
      />


      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      
    </>
  );
}

export default App;
