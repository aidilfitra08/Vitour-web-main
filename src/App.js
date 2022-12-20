import "./App.css";
import React, { useState } from "react";
import Navbar2 from "./components/Navbar2";
import Beranda from "./components/Beranda";
import Rekomendasi from "./components/Recommendation/Recommendation";
import VirtualTour from "./components/Virtual Tour/VirtualTour";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemPage } from "./components/Recommendation/ItemPage";
import Comingsoon from "./components/ComingSoon/comingsoon";
import ApiTest from "./components/API test/ApiTest";
import City from "./components/Virtual Tour/City/DetailCity";
import Detail_Item from "./components/API test/Detail_Item";
import Destination from "./components/Virtual Tour/Destination/Destination";
import Budaya from "./components/Info Pariwisata/Budaya/Budaya";
import Kuliner from "./components/Info Pariwisata/Kuliner/Kuliner";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import Profile from "./components/Profile/UserProfile";
import Store from "./components/Store Page/Store";
import { DetailItem } from "./components/Store Page/DetailItem";
import Protected from "./components/ProtectedRoute";
import Cart from "./components/Cart/Cart";
import SearchDestination from "./components/Virtual Tour/Destination/SearchDestination";
import PageNotFound from "./components/ComingSoon/PageNotFound";
import Orders from "./components/Profile/Orders";
import OrderDetail from "./components/Profile/OrderDetail/OrderDetail";

function App() {
  // const [token, setToken] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState[false];
  // setTokenSession(token);
  if (sessionStorage.getItem("token")) {
    console.log(sessionStorage.getItem("token"));
  }

  return (
    <Router>
      {/* <LoginRegisterNavBar /> */}
      <Routes></Routes>

      {/* semua routes masukin aja dsini dlu, nanti comment mana yang harus dibatesi buat routesnya */}
      <Navbar2 />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/my-cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/orders/detail/:id" element={<OrderDetail />} /> */}
        <Route
          path="/my-cart"
          element={
            <Protected>
              {" "}
              <Cart />{" "}
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              {" "}
              <Profile />{" "}
            </Protected>
          }
        />
        <Route
          path="/orders"
          element={
            <Protected>
              {" "}
              <Orders />{" "}
            </Protected>
          }
        />
        <Route
          path="/orders/detail/:id"
          element={
            <Protected>
              {" "}
              <OrderDetail />{" "}
            </Protected>
          }
        />
        <Route path="/" element={<Beranda />} />
        {/* <Route path="/Store" element={<Rekomendasi />} /> */}
        <Route path="/item" element={<ItemPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/item/:id" element={<DetailItem />} />
        <Route path="/!#" element={<ItemPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/search" element={<SearchDestination />} />

        <Route path="/virtualtour" element={<VirtualTour />} />
        <Route path="/virtualtour">
          <Route path=":id/culture" element={<Budaya />} />
          <Route path=":id/culinary" element={<Kuliner />} />
          <Route path=":id" element={<City />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/comingsoon" element={<Comingsoon />} /> */}
      </Routes>
      {/* <Beranda /> */}
    </Router>
  );
}

export default App;
