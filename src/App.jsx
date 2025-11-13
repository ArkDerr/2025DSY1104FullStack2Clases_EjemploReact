// import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
// import logopasteleria from "./assets/img/logopasteleria.png";
// import pasteleracherry from "./assets/img/pasteleracherry.jpg";
// import pastelero from "./assets/img/pastelero-1jpg.webp";
// import pistacho from "./assets/img/pistacho.jpg";
// import dchocolate from "./assets/img/haz dulces de chocolate.jpg";
// import pchocolate from "./assets/img/haz un pastel de chocolate.jpg";
// import plimon from "./assets/img/haz un pie de limon.jpg";
import "./styles/estilos.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogNoticias from "./pages/BlogNoticias";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<BlogNoticias />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
