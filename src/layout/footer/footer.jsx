//import images
import logo from '../../assets/logo-blanc.png'

//création du pied de page de tout le site
function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt='logo Kasa' className='footer-logo' />
      <p className='footer-AllRights'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
  
export default Footer;