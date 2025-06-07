import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from 'react-router-dom';

// Pages
import Landing from "./Components/Landing";
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';

// Components
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

// Layout Component
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <Footer />
    </>
  );
};

// Router Setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}> {/* Use Layout for shared UI */}
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="homepage" element={<Landing />} />
      <Route path="register" element={<Register />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      {/* Custom 404 page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
