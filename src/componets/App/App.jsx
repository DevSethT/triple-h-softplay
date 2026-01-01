import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import NavBar from "../Nav/Nav";
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
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
