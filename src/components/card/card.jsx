//création composant Card : affichage logement unitaire
function Card({datasid, titleCard, coverCard}) {
    return (
      <li 
        key={datasid}
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