import React from "react";
import "./register-form.css";

function Registerform (){
  return (
    <div className="form-container">
          <form action="#" method="post">
            <h2>¡Registra a tu peludito!</h2>
            <div className="inputs">
              <div className="form_pet">
                <label>Servicio a solicitar</label>
                <select id="service">
                  <option>Consulta veterinaria</option>
                  <option>Baño y peluquería</option>
                  <option>Peluquería</option>
                  <option>Guardería</option>
                </select>

                <label>Tipo de mascota</label>
                <select id="pettype" name="pettype" required>
                  <option>Gato</option>
                  <option>Perro</option>
                  <option>Otro</option>
                </select>

                <label>Nombre del peludo</label>
                <input
                  type="text"
                  id="namepet"
                  placeholder="Mascota"
                  name="namepet"
                  required
                />

                <label>Fecha</label>
                <input type="date" id="date" name="date" required />

                <label>Hora</label>
                <input type="datetime" id="time" name="time" required />

                <label>Sede</label>
                <select id="place" name="place" required>
                  <option>Sede centro</option>
                  <option>Sede norte</option>
                  <option>Sede sur</option>
                </select>
              </div>
              <div className="form_human">
                <label>Nombre del dueño</label>
                <input type="text" id="name" name="name" required />

                <label>Número de cédula</label>
                <input type="id" id="id" name="id" required />

                <label>Correo</label>
                <input
                  type="id"
                  id="id"
                  name="id"
                  placeholder="Email"
                  required
                />

                <label>Celular</label>
                <input type="phone" id="phone" name="phone" required />
              </div>
            </div>
            <button type="submit">Solicitar servicio</button>
          </form>
        </div>
  )
}

export { Registerform };