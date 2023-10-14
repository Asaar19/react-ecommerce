import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>

      <section className="padding-100 newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center ">
              <h2 className="text-center mb-4">GET IN TOUCH</h2>
              <p className="theme-para text-center mb-4">Connect with us today! Feel free to reach out for any questions, <br /> inquiries, or assistance. We're here to help!</p>
              <Link to="/contact" className="theme-btn text-center">
              Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row f-above-row">
            <div className="col-md-12">
              <Navbar />
              <div className="social-links">
                <i>
                  <InstagramIcon />
                </i>
                <i>
                  <FacebookIcon />
                </i>
                <i>
                  <TwitterIcon />
                </i>
                <i>
                  <WhatsAppIcon />
                </i>
              </div>

              <div className="footer-contact-info">
                <h6 className="footer-title">
                  Phone: <span>+123 456 789</span>
                </h6>
                <h6 className="footer-title">
                  Email: <span>istore@live.com</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="row footer-copyright">
            <p> 2023 iStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
