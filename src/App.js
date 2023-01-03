import React from 'react';
import logo from './logo.svg';
import Home from './home';
import Aboute from './Aboute';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Aboute/*" element={<Aboute />} />/
    </Routes>
  </BrowserRouter>
  );
}

export default App;
