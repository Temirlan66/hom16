import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import Details from "./components/Details";
import Header from "./components/Header";
import Product from "./components/Product";
import Logo from "./pages/Logo";
import MyCard from "./pages/MyCard";
import MyOrders from "./pages/MyOrders";
import Button from "./UI/Button";
function App() {
  const navigation = useNavigate()

  const BackHandler = ()=>{
    navigation(-1)
  }
  const products = [
    {
      id: 1,
      title: "Lexus ES 300h",
      description: "Best Car",
    },
    {
      id: 2,
      title: "Kia k5 ",
      description: "Top Car ",
    },
  ];
  return (
    <div>
      <Header />

      <Button onClick={BackHandler}>Go back</Button>

      <Routes>
        <Route path="/logo" element={<Logo />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/myCard" element={<MyCard />} />
        <Route path="/products/" element={<Product products={products} />} />
        <Route
          path="/products/:id/details"
          element={<Details products={products} />}
        />
      </Routes>

    </div>
  );
}

export default App;
