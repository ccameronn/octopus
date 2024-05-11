import "./Header.scss";
import octopusEnergyLogo from "../../assets/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="menu-container">
        <a href="/" class="box-shadow-menu">
          Menu
        </a>
      </div>
      <a href="/" class="octo-logo">
        <img src={octopusEnergyLogo} />
      </a>
      <div className="logout-container">
        <a href="/">Log Out</a>
      </div>
    </header>
  );
}

export default Header;
