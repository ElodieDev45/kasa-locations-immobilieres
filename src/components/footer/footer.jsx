import logo from '../../assets/logo-blanc.png'
import './footer.css'


function Footer() {
  return (
    <div className='Footer'>
      <img src={logo} alt='logo Kasa' className='Footer-logo' />
      <p className='Footer-AllRights'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
  
export default Footer;