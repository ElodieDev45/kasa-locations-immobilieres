import './card.css'
import LogementsCard from './logements';
import logements from '../../datas/logements.json'


function Card() {
    return (
      <div className='Cards'>
        <ul>
          {logements.map(({id, title, cover}) => (
            <LogementsCard
              // id={id}
              title={title}
              cover={cover}
            />
          ))}
        </ul>
      </div>
    );
  }
  
export default Card;


// function Card() {
//     return (
//       <div className='Card'>
//         <h2 className='Card-title'>{LogementsCard}</h2>
//       </div>
//     );
//   }
  
// export default Card;