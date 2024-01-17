import Carousel from 'react-bootstrap/Carousel';
import Block71 from '../images/slider2.1.avif';
import Block72 from '../images/slider2.2.avif';
import Block73 from '../images/slider2.3.avif';
import Block74 from '../images/slider2.4.gif';


function Section_03_component() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Block71}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Block72}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Block73}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Block74}
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export {Section_03_component};