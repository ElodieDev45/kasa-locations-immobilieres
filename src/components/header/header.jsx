import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
            <img src={logo} alt='logo Kasa' className='Header-logo' />
            <nav className='Header-nav'>
                <ul>
                    <li>
                        <NavLink 
                          to="../../" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='../../About' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}
                        >
                          A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
  
export default Header;