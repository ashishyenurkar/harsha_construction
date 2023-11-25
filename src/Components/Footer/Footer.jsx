import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>Harsha Construction</h3>
        <p>Your address, contact information, etc. can go here.</p>
        <div className="social-icons">
          <Link to="/facebook" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="/twitter" target="_blank">
            <FaTwitter />
          </Link>
          <Link to="/instagram" target="_blank">
            <FaInstagram />
          </Link>
        </div>
        <p className='address'>&copy; 2023 Harsha Construction</p>
      </div>
    </footer>
  );
};

export default Footer;
