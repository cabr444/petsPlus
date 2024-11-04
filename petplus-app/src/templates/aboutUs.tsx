import "../static/css/aboutUs.css";
import { Headercomp } from "../components/header-component/headercomp";
import { Footercomp } from "../components/footer-component/footercomp";
import { PetsForm } from "../components/pets-form-component/pets-form";
import banner from "../assets/images/banner.jpg";

function AboutAs() {
  return (
    <div>
      <div className="header">
        <Headercomp />
      </div>
      <div className="ctn-main">
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      <div className="container">
        <div className="about-us">
          <h2>Quienes somos?</h2>
          <p>
            En PetPlus, ofrecemos una atención veterinaria integral y de alta
            calidad, respaldada por años de experiencia en el cuidado de
            animales. Nuestro equipo está compuesto por profesionales altamente
            calificados, con títulos en medicina veterinaria y especializaciones
            en diversas áreas como cirugía, dermatología y nutrición animal, lo
            que nos permite brindar un servicio completo y personalizado.
          </p>
          <p>
            Nos enorgullecemos de tratar a cada mascota con el mismo cariño y
            dedicación que recibirían en su propio hogar. Entendemos que los
            animales no son solo mascotas, sino miembros de la familia, por lo
            que nuestra prioridad es asegurar su salud y felicidad en cada
            consulta.
          </p>
          <p>
            En PetPlus, el trato humano también es esencial. Nos enfocamos en
            escuchar y entender las necesidades de nuestros clientes, ofreciendo
            un ambiente acogedor y amigable tanto para las mascotas como para
            sus dueños. Nuestro objetivo es que cada visita sea lo más cómoda y
            positiva posible, minimizando el estrés y maximizando la confianza.
          </p>
          <img
            src="https://sanmartin.edu.co/wp-content/uploads/2024/03/facultad-de-medicina-veterinaria-y-zootecnia.png"
            alt=""
          />
        </div>

        <div className="aboutUs-info">
          <h2>Porque elegirnos?</h2>
          <p>
            En PetPlus, ofrecemos una atención veterinaria de calidad,
            respaldada por años de experiencia y un equipo de profesionales
            altamente calificados. Nos especializamos en brindar un cuidado
            personalizado para cada mascota, adaptando nuestros servicios a sus
            necesidades específicas, y asegurando un entorno acogedor donde se
            sientan cómodas y seguras.
          </p>
          <p>
            Elegirnos significa optar por un compromiso genuino con el bienestar
            animal, donde la actualización constante en medicina veterinaria y
            la satisfacción del cliente son nuestra prioridad. En PetPlus,
            tratamos a tu mascota con el mismo cariño y dedicación que recibiría
            en su hogar.
          </p>
          <img
            src="https://www.colvetrionegro.com.ar/wp-content/uploads/2020/04/dog-vet-1536x1025.png"
            alt=""
          />
        </div>
      </div>
      <PetsForm />
    </div>
    <div className="footer">
      <Footercomp />
    </div>
    </div>
  );
}
export { AboutAs };