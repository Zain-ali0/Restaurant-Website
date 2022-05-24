import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { GiKnifeFork } from "react-icons/gi"
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  return(
    <div className="app__footer" id='Contact'>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p >Baghdad Karada Abu Nawas Street</p>
        <p >+ 770-765-432</p>
        <p >+ 770-765-432</p>
      </div>

      <div className="app__footer-links_logo">
        <p>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <GiKnifeFork/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p >Monday-Friday:</p>
        <p >08:00 am - 12:00 am</p>
        <p >Saturday-Sunday:</p>
        <p >07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p >created by <a href="https://github.com/Zain-ali0">Zain</a> &copy; copyright @ 2022</p>
    </div>
  </div>
  );

};

export default Footer;
