import "./headercomp.css";
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { redirectToHome } from "../../static/js/script";

function Headercomp() {
  const toggleMenu = () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu) {
      navMenu.classList.toggle("active");
    }
  };

  return (
    <header>
      <div className="icon-nav">
        <img src="https://www.timetopet.com/dist/images/brand/icon.png" alt="" onClick={redirectToHome}/>
        <h2 onClick={redirectToHome}>PetsPlus</h2>
      </div>
      <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
      <div className="nav" id="navMenu">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/aboutAs">Nosotros</Link></li>
            <li><Link to="/planner">Agenda</Link></li>
            <li><Link to="/register">Registro</Link></li>
            <li><Link to="/session">Sesión<IoPersonCircleOutline /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Headercomp };
