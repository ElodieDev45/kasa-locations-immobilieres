//création composant Card : affichage logement unitaire
function Card({datasid, titleCard, coverCard}) {
    return (
      <li 
        key={datasid}
        className='card'
      >
        <h3>
          {titleCard}
        </h3>
        <img 
          className='card-cover'
          src={coverCard}
          alt={`${titleCard}-cover`}
        />
      </li>
    );
  }
  
export default Card;