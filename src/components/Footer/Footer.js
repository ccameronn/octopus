import "./Footer.scss";
import tiktokIcon from "../../assets/icons/tiktok-svgrepo-com.svg";
//import { Link } from "react-router-dom";
import instaIcon from "../../assets/icons/instagram-svgrepo-com.svg";
import tweetIcon from "../../assets/icons/twitter-svgrepo-com.svg";
import fbIcon from "../../assets/icons/facebook-svgrepo-com.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__icon">
          <img
            src={tiktokIcon}
            className="tiktok__icon"
            alt="Follow us on TikTok"
          />
          <img
            src={instaIcon}
            className="insta__icon"
            alt="Follow us on Instagram"
          />
          <img src={tweetIcon} className="tweet__icon" alt="Follow us on X" />
          <img src={fbIcon} className="fb__icon" alt="Follow us on facebook" />
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
