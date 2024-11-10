import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
       
        <div className={styles.grid}>
          <div>
            <h3 className={styles.heading}>Company</h3>
            <ul>
              <li><a href="#" className={styles.link}>About Us</a></li>
              <li><a href="#" className={styles.link}>Careers</a></li>
              <li><a href="#" className={styles.link}>Privacy Policy</a></li>
              <li><a href="#" className={styles.link}>Terms of Service</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className={styles.heading}>Contact Us</h3>
            <ul>
              <li>Phone: (92) +3412231142</li>
              <li>Email: itxharoonkhan@gmail.com</li>
              <li>Address: Future Colony Landhi Karachi</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className={styles.heading}>Follow Us</h3>
            <div className={styles.icons}>
              <a href="#" className={styles.iconLink}>
                <FaFacebook size={24} />
              </a>
              <a href="#" className={styles.iconLink}>
                <FaTwitter size={24} />
              </a>
              <a href="#" className={styles.iconLink}>
                <FaInstagram size={24} />
              </a>
              <a href="#" className={styles.iconLink}>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className={styles.heading}>Newsletter</h3>
            <p className={styles.description}>Subscribe to our newsletter for the latest updates and promotions.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button className={styles.button}>Subscribe</button>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Your Company Haroon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
