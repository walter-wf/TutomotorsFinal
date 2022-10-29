
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="img-container">
          </div>
          <div className="ul-container">
            <ul className="list">
              <Link to="/" className="btn-nav">
                Inicio
              </Link>
              <Link to="/category/" className="btn-nav">
                Servicio tecnico
              </Link>
              <Link to="/category/" className="btn-nav">
                Venta de repuestos
              </Link>
                <Link to="/category/" className="btn-nav">
                Nosotros
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-container">
        <h1>Tuto Motors</h1>
      </div>
    </header>
  );
};

export default Navbar;