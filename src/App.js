import CarouselIndex from "./components/Carousel/Carousel.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import TiendaOnline from "./components/TiendaOnline/TiendaOnline.jsx";
import Servicios from "./components/Servicios/Servicios";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import ServiciosTaller from "./components/ServiciosTaller/Serviciostaller.js";



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CarouselIndex />
        <Routes>
          <Route path="/category/:categoryId" />
          <Route path="/detail/:productsId" />
        </Routes>
        <TiendaOnline />
        <Servicios />
        <ServiciosTaller />
        <Ubicacion />

        <Footer />
      </BrowserRouter>

      {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
