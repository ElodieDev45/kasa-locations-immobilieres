import banner from '../assets/banner.png'
import './banner.css'

function Banner() {
    return (
      <div className='Banner'>
        <img src={banner} alt='paysage de la bannière' className='Banner-img' />
        <h2 className='Banner-title'>Banner</h2>
      </div>
    );
  }
  
export default Banner;