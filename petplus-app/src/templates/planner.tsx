import { Headercomp } from "../components/header-component/headercomp";
import { Footercomp } from "../components/footer-component/footercomp";
import abajo from "../assets/images/abajo.jpg";
import "../static/css/planner.css";

function Planner() {
  return (
    <div className="daniel">
      <Headercomp />
      <div className="general">
        <h2>Agenda Semanal de Citas</h2>
        <p>
          Aquí encontrarás todos los días disponibles con los que contamos para
          atenderte.
        </p>
        <p>
          En PetPlus, nos dedicamos a cuidar y atender a tus mascotas en
          cualquier momento. Trabajamos las 24 horas del día, los 7 días de la
          semana, para garantizar que tu compañero peludo reciba la atención que
          merece, sin importar la hora. Nuestro equipo de profesionales está
          siempre disponible para brindarle el mejor cuidado y apoyo a tu
          mascota, porque sabemos que su bienestar es lo más importante. ¡Confía
          en PetPlus para el cuidado de tu mejor amigo!
        </p>
        <p>
          Nuestra agenda semanal se organiza para ofrecerte flexibilidad en la
          programación de tus citas, ya sea para chequeos de rutina,
          vacunaciones, consultas especializadas o emergencias. Puedes reservar
          tu cita con anticipación a través de nuestra página web o mediante
          nuestras redes sociales, asegurando que tu visita sea lo más
          conveniente posible.
        </p>
        <p>
          Para facilitar tu experiencia, también ofrecemos recordatorios de
          citas por mensaje de texto o correo electrónico, para que nunca te
          pierdas una consulta importante.
        </p>
        <p>
          Recuerda que en caso de emergencia, puedes contactarte directamente
          con nosotros a través de nuestras diferentes redes sociales y con
          gusto atenderemos tu solicitud. Nuestro equipo está preparado para
          manejar situaciones críticas y brindarle a tu mascota la atención que
          necesita en el momento adecuado.
        </p>
        <img src={abajo} className="abajo" alt="" />
      </div>

      <table className="agenda">
        <thead>
          <tr>
            <th>Día</th>
            <th>Disponibilidad</th>
            <th>Horas Disponibles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lunes</td>
            <td>Ocupado</td>
            <td>No disponible</td>
          </tr>
          <tr>
            <td>Martes</td>
            <td>Disponible</td>
            <td>9:00 - 11:00, 14:00 - 16:00</td>
          </tr>
          <tr>
            <td>Miércoles</td>
            <td>Ocupado</td>
            <td>No disponible</td>
          </tr>
          <tr>
            <td>Jueves</td>
            <td>Disponible</td>
            <td>10:00 - 12:00, 15:00 - 17:00</td>
          </tr>
          <tr>
            <td>Viernes</td>
            <td>Disponible</td>
            <td>9:00 - 12:00</td>
          </tr>
          <tr>
            <td>Sábado</td>
            <td>Ocupado</td>
            <td>No disponible</td>
          </tr>
          <tr>
            <td>Domingo</td>
            <td>Disponible</td>
            <td>10:00 - 13:00</td>
          </tr>
        </tbody>
      </table>
      <Footercomp />
    </div>
  );
}

export { Planner };
