import banner from '../assets/banner.png'
import './banner.css'

function Banner() {
    return (
      <div className='Banner'>
        <img src={banner} alt='paysage de falaises' className='Banner-img' />
      </div>
    );
  }
  
export default Banner;