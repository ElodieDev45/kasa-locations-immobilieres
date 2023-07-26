import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
    const title=`KASA - Locations Immobilières`
    return (
        <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">
            {title}
          </h1>
        </header>
    );
  }
  
  export default Header;