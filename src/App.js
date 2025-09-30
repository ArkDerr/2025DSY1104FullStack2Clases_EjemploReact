import { Helmet } from "react-helmet";
import { Routes, Route, Link } from "react-router-dom";
import logopasteleria from "./assets/img/logopasteleria.png";
import pasteleracherry from "./assets/img/pasteleracherry.jpg";
import pastelero from "./assets/img/pastelero-1jpg.webp";
import pistacho from "./assets/img/pistacho.jpg";
import dchocolate from "./assets/img/haz dulces de chocolate.jpg";
import pchocolate from "./assets/img/haz un pastel de chocolate.jpg";
import plimon from "./assets/img/haz un pie de limon.jpg";
import "./styles/estilos.css";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
