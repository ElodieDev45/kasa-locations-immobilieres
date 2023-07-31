import './card.css'

function handleClick(logementTitle) {
  alert(`Vous souhaitez regarder le logement ${logementTitle} ? Très bon choix ✨`);
}

function Card({idCard, titleCard, coverCard}) {
    return (
      <li 
        key={idCard}
        className='Card'
        onClick={() => handleClick(titleCard)}
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