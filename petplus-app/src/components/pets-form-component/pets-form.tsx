import './pets-form.css';
import { redirectToHome } from "../../static/js/script";


function PetsForm() {
  return(
    <div className="form-container-pets-form" id="form-container">
        <form action="#" method="post">
          <h2>Agenda tu cita!</h2>
          <label>Nombre Dueño:</label>
          <input type="text" id="nameD" name="nameD" required />
          <label>Nombre de la mascota:</label>
          <input type="text" id="petName" name="petName" required />
          <label>Dia de la cita:</label>
          <input type="date" id="day" name="day" required />
          <button type="submit" onClick={redirectToHome}>Enviar</button>
        </form>
      </div>
  )
}

export { PetsForm };