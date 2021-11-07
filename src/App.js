import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductItem from "./components/ProductItem";
import MainHeader from "./components/homepage/MainHeader";
import MainFooter from "./components/homepage/MainFooter";
import { Routes, Route } from "react-router-dom";
// import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { sortList } from "./features/list/listSlice";

function App() {

  return (
  <>
    <div className="App bg-white text-dark">
      <MainHeader />
      {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductForm />
              <ProductList />
            </>
          }
        />
        <Route path="/products/:id" element={<ProductItem />} />
      </Routes>
    </div>
    <MainFooter />
  </>
  );
}

export default App;
