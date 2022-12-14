import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Netflix from "./pages/Netflix";
import Signup from "./pages/signup";
import Login from "./pages/login";

export default 

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route exact path="/login" element={<Login />}/>
  <Route exact path="/signup" element={<Signup />}/>
  <Route exact path="/netflix" element={<Netflix />}/>
    </Routes></BrowserRouter>

  );
    

}

