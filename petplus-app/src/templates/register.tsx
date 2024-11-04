import { Headercomp } from "../components/header-component/headercomp";
import { Footercomp } from "../components/footer-component/footercomp";
import "../static/css/register.css";
import { Registerform } from "../components/register-form-component/register-form";

function Register (){
  return (
    <div>
      <Headercomp/>
      <div className="principal">
        <h1>Registro de mascotas</h1>
        <div className="img">
          <img
            src="https://segurosexito.vtexassets.com/arquivos/reclamos-seguros-mascotas.png"
            alt=""
          />
        </div>
        <Registerform/>
      </div>
      <Footercomp/>
    </div>
  );
}

export { Register };