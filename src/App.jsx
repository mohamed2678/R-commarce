import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/Home/Home";
import ProductsDetails from "./page/ProductDetails/ProductsDetails";
import Cart from "./page/Cart/CartPage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearcResults from "./page/SearcResults";
import About from "./page/About/About";
import Favorite from "./page/favorites/favorite";

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
            background: "#e9e9e9",
            padding: "15px",
            borderRadius: "8px",
          },
        }}
      />

      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearcResults />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
