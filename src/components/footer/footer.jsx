//import images
import logo from '../../assets/logo-blanc.png'

//création du pied de page de tout le site
function Footer() {
  return (
    <div className='Footer'>
      <img src={logo} alt='logo Kasa' className='Footer-logo' />
      <p className='Footer-AllRights'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
  
export default Footer;