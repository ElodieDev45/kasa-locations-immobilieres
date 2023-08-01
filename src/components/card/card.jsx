import './card.css'

function Card({id, titleCard, coverCard}) {
    return (
      <li 
        key={id}
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