import '../carrousel/carrousel.css'
import { useState } from "react"
import previous from '../../assets/previous.png'
import next from  '../../assets/next.png'

function Carrousel({datasid, title, pictures}) {
    const [index, setIndex] = useState(0);
    const length = pictures.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="carrousel" key={datasid}>
            <figure>
                <button onClick={handlePrevious} id='previous' ><img src={previous} className='scrollPrevious' alt='flèche précédent'/></button>
                    <img
                        src={pictures[index]}
                        alt={`aperçu du logement ${title}`}
                        className='pctLogement'
                    />
                <button onClick={handleNext} id='next'><img src={next} className='scrollNext' alt='flèche suivant'/></button>
            </figure>
        </div>
    )
}

export default Carrousel