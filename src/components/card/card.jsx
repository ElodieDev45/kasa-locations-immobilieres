import './card.css'
import LogementsCard from './logements';
import {logements} from '../../datas/logements2'
// import data from '../../datas/logements.json'
// import LogementsCard from './logements.jsx';


function Card() {

    return (
      <div className='Cards'>
        <ul className='Card'>
          {logements.map(({id, title, cover}) => (
            <LogementsCard
              id={id}
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