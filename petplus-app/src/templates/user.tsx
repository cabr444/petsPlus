import { Headercomp } from "../components/header-component/headercomp";
import { Footercomp } from "../components/footer-component/footercomp";
import banner2 from "../assets/images/banner2.png";
import "../static/css/user.css";

function User() {
  return (
    <div>
      <Headercomp />
      <div className="banner2">
        <img src={banner2} alt="" />
      </div>

      <div className="user-main">
        <section className="profile">
          <div className="profile-info">
            <h2>Bienvenido nuevamente !</h2>
            <hr />
            <img
              src="https://www.clipartmax.com/png/full/255-2557794_animated-person-animated-picture-of-man.png"
              alt=""
            />
            <p>
              <strong>Correo electrónico:</strong> cliente@example.com
            </p>
            <p>
              <strong>Teléfono:</strong> +57 123 456 7890
            </p>
            <p>
              <strong>Dirección:</strong> Calle Falsa 123, Ciudad
            </p>
          </div>
          <div className="pet-info">
            <hr />
            <h3>Información de la Mascota</h3>
            <hr />
            <img
              src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Downloader_37.png?v=1687504134"
              alt=""
            />
            <div className="information-pet">
            <p>
              <strong>Nombre:</strong> Firulais
            </p>
            <p>
              <strong>Especie:</strong> Perro
            </p>
            <p>
              <strong>Raza:</strong> Labrador
            </p>
            <p>
              <strong>Edad:</strong> 3 años
            </p>
            <p>
              <strong>Última Visita:</strong> 10 de Septiembre, 2024
            </p>
            </div>
          </div>
          <div className="actions">
            <h3>Acciones</h3>
            <ul>
              <li>
                <a href="#">Ver Próximas Citas</a>
              </li>
              <li>
                <a href="#">Historial Médico</a>
              </li>
              <li>
                <a href="#">Actualizar Información</a>
              </li>
              <li>
                <a href="#">Programar Nueva Cita</a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Footercomp />
    </div>
  );
}

export { User };
