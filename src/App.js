import Carousel from './components/Carousel/Carousel.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import TiendaOnline from './components/TiendaOnline/TiendaOnline.jsx';
import Footer from './components/Footer/Footer.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
           <Carousel />
          <Routes>
            <Route
              path="/category/:categoryId"
            />
            <Route
              path="/detail/:productsId"
            />

      
        </Routes>
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