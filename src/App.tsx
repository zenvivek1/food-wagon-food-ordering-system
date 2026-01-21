// import React from 'react'

import { Route, Routes } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./HomePage";
import UserProfile from "./Pages/ProfilePage/UserProfile";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

import { Toaster } from "sonner";
import FoodDetails from "./Pages/ViewFoodPage/FoodDetails";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AdminSidebar from "./Pages/AdminPage/Components/AdminSideBar";
import RestaurantHero from "./Pages/AdminPage/Components/Restaurants/RestaurantHero";
import Dashboard from "./Pages/AdminPage/Components/Dashboard";
import Orders from "./Pages/AdminPage/Components/Orders/Orders";
import Users from "./Pages/AdminPage/Components/Users/Users";
import AdminSettings from "./Pages/AdminPage/Components/Settings/Settings";
import Products from "./Components/Products";
import Cart from "./Pages/AdminPage/Components/Cart/Cart";
import DummyCheckout from "./Pages/AdminPage/Components/Dummies/Checkout";
import OrderSuccess from "./Pages/AdminPage/Components/Orders/OrderSuccess";
import ViewOrders from "./Pages/Orders/ViewOrders";
import SellerPage from "../DraftedCode/SellerPage/SellerPage";
import AddRestaurant from "../DraftedCode/SellerPage/AddRestaurant";

import TermsToUse from "./Pages/TermsToUse/TermsToUse";
import FAQsPage from "./Pages/TermsToUse/FAQs";
import { useAuth } from "./Context/AuthContext";
import FoodLoader from "./Pages/Loader/FoodLoader";


const App = () => {
  const [OpenSidebar, setOpenSidebar] = useState(false);
  const [OpenAdminSidebar, setOpenAdminSidebar] = useState(false);

  const { isAuthReady } = useAuth();

  return (
    <>
      <Toaster position="bottom-right" richColors closeButton duration={3000} />
      {!isAuthReady ? (
        <FoodLoader height="screen" />
      ) : (
        <>
          <Sidebar open={OpenSidebar} setOpen={setOpenSidebar} />
          <AdminSidebar open={OpenAdminSidebar} setOpen={setOpenAdminSidebar} />
          <Navbar
            setOpenSidebar={setOpenSidebar}
            setOpenAdminSidebar={setOpenAdminSidebar}
          />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/auth" element={<AuthPage />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/product/:id" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/" element={<DummyCheckout />} />
            <Route path="/order-success/:id" element={<OrderSuccess />} />
            <Route path="/orders" element={<ViewOrders />} />
            <Route path="/termstouse" element={<TermsToUse />} />
            <Route path="/faqs" element={<FAQsPage />} />
            {/* <Route path="food-by-categories" element={<FoodByCategories/>} /> */}
            {/* <Route path="category/:name" element={<CatergoryFood/>} /> */}
          </Routes>

          <Routes>
            <Route path="/admin" element={<AdminPage />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="restaurants" element={<RestaurantHero />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>

          <Routes>
            <Route path="/seller">
              <Route path="" element={<SellerPage />}></Route>
              <Route path="add-restaurant" element={<AddRestaurant />}></Route>
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
