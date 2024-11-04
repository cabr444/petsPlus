import "../static/css/session.css";
import { Link } from 'react-router-dom';
import { redirectToUser } from "../static/js/script";
import {
  IoPersonCircleOutline,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLockClosedOutline,
  IoMailOutline
} from 'react-icons/io5';

function Session() {
  return (
    <div className="session">
      <header className="session-header">
        <div className="session-icon">
          <img
            src="https://www.timetopet.com/dist/images/brand/icon.png"
            className="session-img"
            alt="session-Logo"
          />
          <h2 className="session-title">PetsPlus</h2>
        </div>
        <div className="hamburger">&#9776;</div>
        <div className="session-nav" id="navMenu">
          <nav className="session-nav">
            <ul className="session-ul">
              <li className="session-li"><Link to="/">Inicio</Link></li>
              <li><Link to="/AboutAs">Nosotros</Link></li>
              <li><Link to="/planner">Agenda</Link></li>
              <li><Link to="/register">Registro</Link></li>
              <li><Link to="/session">Sesión <IoPersonCircleOutline /></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="session-main">
        <div className="session-container">
          <div className="session-container-form">
            <form className="session-sign" action="user">
              <h2 className="session-h2">Iniciar sesión</h2>
              <div className="session-social">
                <IoLogoTwitter className='session-icon' />
                <IoLogoFacebook className='session-icon' />
                <IoLogoWhatsapp className='session-icon' />
                <IoLogoInstagram className='session-icon' />
              </div>
              <span className="session-span">Use su correo y contraseña</span>
              <div className="session-container-input">
                <IoMailOutline className='session-icon-ema' />
                <input type="text" placeholder="Email" />
              </div>
              <div className="session-container-input">
                <IoLockClosedOutline className='session-icon-pass' />
                <input type="password" placeholder="Password" />
              </div>
              <a href="#" className="session-a">Olvidaste tu contraseña?</a>
              <button className="session-btn" onClick={redirectToUser}>Iniciar sesión</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Session };
