import React from 'react';
import './Footer.css';
import logo from '../../Assets/logof.png'
import dribbleIcon from '../../Assets/dribble.png';
import instagramIcon from '../../Assets/instagram.png';
import twitterIcon from '../../Assets/twitter.png';
import youtubeIcon from '../../Assets/youtube.png';
import sendIcon from '../../Assets/send-icon.png'
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className=" footer_container">
        <div className="footer_items">
        <img src={logo} alt="logo" className="footer_icon" />
          <p className="footer_copy">
            Copyright © 2024 Nexcent. All rights reserved
          </p>
          <div className="footer_icons">
            <img src={instagramIcon} alt="Instagram" className="footer_icon" />
            <img src={dribbleIcon} alt="Dribble" className="footer_icon" />
            <img src={twitterIcon} alt="Twitter" className="footer_icon" />
            <img src={youtubeIcon} alt="YouTube" className="footer_icon" />
          </div>
        </div>
        <div className="f-1">
          <h3 className="f-n">Company</h3>
          <ul className="f-l">
            <li className="fo-t">
              <a href="#" className="footer_company_link">About us</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_company_link">Blog</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_company_link">Contact us</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_company_link">Pricing</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_company_link">Testimonial</a>
            </li>
          </ul>
        </div>
        <div className="f-2">
          <h3 className="f-n">Support</h3>
          <ul className="f-l">
            <li className="fo-t">
              <a href="#" className="footer_support_link">Help center</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_support_link">Terms of services</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_support_link">Legal</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_support_link">Privacy policy</a>
            </li>
            <li className="fo-t">
              <a href="#" className="footer_support_link">Status</a>
            </li>
          </ul>
        </div>
        <div className="footer_it">
          <h3 className="fo-s">Stay up to date</h3>
          <div className="f-up">
            <input
              type="text"
              className="f-i"
              placeholder="your email address" />
            <img src={sendIcon} alt="sendicon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
