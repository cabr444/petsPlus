import './footercomp.css';
import { IoLogoTwitter, IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io5';


function Footercomp() {
  return (
    <footer>
      <div className="footer">
        <div className="social">
          <IoLogoTwitter className='icon'/>
          <IoLogoFacebook className='icon'/>
          <IoLogoWhatsapp className='icon'/>
          <IoLogoInstagram className='icon'/>
        </div>
        <p>PetsPlus 2024 ®</p>
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export { Footercomp };
