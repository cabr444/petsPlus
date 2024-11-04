import { Headercomp } from "../components/header-component/headercomp";
import { Footercomp } from "../components/footer-component/footercomp";
import home_pets from "../assets/images/home_pets.png";
import "../static/css/styles.css";
import { redirectToSession } from "../static/js/script";

function Index() {
  return (
    <div className="main">
        <Headercomp />
      <div className="title">
        <h2>PetsPlus</h2>
      </div>
      <div className="content">
      <div className="principal-container">
        <img className="imagehome" src={home_pets} alt="Background" />
        <div className="info">
          <h2>¿Eres un amante de los animales?</h2>
          <p>
            Entonces PetPlus es lo que estás buscando. Somos una empresa
            especializada en servicios de alta calidad para mascotas ubicada en
            Bogotá.
          </p>
          <ul>
            <li>- Consultas veterinarias</li>
            <li>- Baño y peluquería</li>
            <li>- Guardería</li>
          </ul>
          <h4>
            ¡Nos aseguramos que tus mascotas reciban el mejor cuidado posible!
          </h4>
          <button className="btn" onClick={redirectToSession}>Agendar servicio</button>
        </div>
      </div>
      </div>
      
      <Footercomp />
    </div>
  );
}

export { Index };
