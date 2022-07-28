import React from "react";
import { Route, Routes } from "react-router-dom";
import Approve from "./pages/Approve";
import Buyer from "./pages/Buyer";
import Landing from "./pages/Landing";
import Seller from "./pages/Seller"
import Warranty from "./pages/Warranty";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/seller" element={<Seller/>}/>
        <Route path="/buyer" element={<Buyer/>}/>
        <Route path="/approve/:warrantyID" element={<Approve/>}/>
        <Route path="/warranty/:warrantyID" element={<Warranty/>}/>
      </Routes>
    </>
  );
}

export default App;
