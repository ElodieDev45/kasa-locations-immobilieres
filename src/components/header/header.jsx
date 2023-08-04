import logo from '../../assets/logo.png'

function Header() {
    return (
      <div className='Header'>
        <img src={logo} alt='logo Kasa' className='Header-logo' />
        <nav className='Header-nav'>
          <ul>
            <li><a href="../../">Accueil</a></li>
            <li><a href='../../About'>A propos</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
export default Header;