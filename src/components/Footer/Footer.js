import "./Footer.scss";
import tiktokIcon from "../../assets/icons/tiktok-svgrepo-com.svg";
//import { Link } from "react-router-dom";
import instaIcon from "../../assets/icons/instagram-svgrepo-com.svg";
import tweetIcon from "../../assets/icons/x-icon.png";
import fbIcon from "../../assets/icons/facebook-svgrepo-com.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__icon">
          <a href="https://www.tiktok.com/@octopusenergy" target="_blank">
            <img
              src={tiktokIcon}
              className="icon-img"
              alt="Follow us on TikTok"
            />
          </a>
          <a href="https://www.instagram.com/octopusenergy" target="_blank">
            <img
              src={instaIcon}
              className="icon-img"
              alt="Follow us on Instagram"
            />
          </a>
          <a href="https://twitter.com/OctopusEnergy" target="_blank">
            <img src={tweetIcon} className="icon-img" alt="Follow us on X" />
          </a>
          <a href="https://www.facebook.com/octopusenergy" target="_blank">
            <img
              src={fbIcon}
              className="icon-img"
              alt="Follow us on facebook"
            />
          </a>

          {/* <Link to="/">
          
        </Link>  */}
        </div>
        <div className="copyrights">
          <p>
            Octopus Energy Ltd is a company registered in England and Wales.
          </p>
          <p>
            Registered number: 09263424. Registered office: UK House, 5th floor,
            164-182 Oxford Street, London, W1D 1NN.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
