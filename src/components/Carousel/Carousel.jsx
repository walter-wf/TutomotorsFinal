import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

function CarouselIndex() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="imagen-1"
          src="imagenes/aa2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Revision sistemas de aire acondicionado de ultima generacion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen-2"
          src="imagenes/Mecanica.jpg"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h3>Mecanica General</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen-3"
          src="imagenes/decontaminacion.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Decontaminacion y limpieza del vehiculo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselIndex;