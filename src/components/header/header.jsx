import logo from '../assets/logo.png'
import './header.css'

function Header() {
    return (
      <header className='Header'>
        <img src={logo} alt='logo Kasa' className='Header-logo' />
        <nav className='Header-nav'>
          <ul>
            <li><a href="../../">Accueil</a></li>
            <li><a href='../../About'>A propos</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
export default Header;