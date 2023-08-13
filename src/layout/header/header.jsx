//import fonctions spéciales React (hook)
import { NavLink } from 'react-router-dom';
//import images
import logo from '../../assets/logo.png'

//création de l'entête générale du site
function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='logo Kasa' className='header-logo' />
            <nav className='header-nav'>
                <ul>
                    {/* utilisation de NavLink pour la getsion simplifiée des liens de navigation du site et de leur état */}
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