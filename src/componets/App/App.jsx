import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../../pages/Home/Home";
import Rentals from "../../pages/Rentals/Rentals";
import About from "../../pages/About/About";
import PageNotFound from "../PageNotFound/PageNotFound";
import Contact from "../../pages/Contact/contact";

function App() {
  return (
    <div className="app">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
