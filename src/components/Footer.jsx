import React from 'react';
import Face from '../assets/icons/facebookIcon.svg';
import Insta from '../assets/icons/instagramIcon.svg';
import Twitter from '../assets/icons/twitterIcon.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <h3>CONTATO</h3>
          <li>contato@snappacking.com</li>
          <li>+55 45 99558899</li>
          <li>+55 45 32266677</li>
        </ul>
        <div>
          <a href="http://www.facebook.com" target="blanck"><img src={Face} /></a>
          <a href="http://www.instagram.com" target="blanck"><img src={Insta} /></a>
          <a href="http://www.twitter.com" target="blanck"><img src={Twitter} /></a>
        </div>
      </div>
      <p>Todos os direitos reservados &copy; Thainá Weingaartner - Snap Packing 2020</p>
    </footer>
  );
}

export default Footer;