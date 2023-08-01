import './card.css'

function Card({idCard, titleCard, coverCard}) {
    return (
      <li 
        key={idCard}
        className='Card'
      >
        <h3>
          {titleCard}
        </h3>
        <img 
          className='Card-cover'
          src={coverCard}
          alt={`${titleCard}-cover`}
        />
      </li>
    );
  }
  
export default Card;