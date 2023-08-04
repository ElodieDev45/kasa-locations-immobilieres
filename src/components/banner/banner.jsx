function Banner({img, alt, title}) {
    return (
      <div className='Banner'>
        <h1>{title}</h1>
        <img src={img} alt={alt} className='Banner-img' />
      </div>
    );
  }
  
export default Banner;