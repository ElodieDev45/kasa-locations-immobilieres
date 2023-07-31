import './card.css'
import './logements.css'
import logements from '../../datas/logements.json'
import LogementsCard from './logements';


function Card() {
    return (
      <main className='Cards'>
        <ul>
          {logements.map(({id, title, cover}) => (
            <LogementsCard
              key={id}
              title={title}
              cover={cover}
            />
          ))}
        </ul>
      </main>
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