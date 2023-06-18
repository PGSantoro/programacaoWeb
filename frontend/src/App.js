import Login from "./Login"
import React from "react"
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from "./Signup";
import Home from "./Home";
import Cardapio from "./Cardapio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cardapio" element={<Cardapio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
