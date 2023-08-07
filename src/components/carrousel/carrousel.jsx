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
        <figure className="carrousel" key={datasid}>
                <img
                    src={pictures[index]}
                    alt={`aperçu du logement ${title}`}
                    className='carrousel-pct'
                />
                <div className="carrousel-slider">
                    <button onClick={handlePrevious} id='previous' ><img src={previous} className='scrollPrevious' alt='flèche précédent'/></button>
                    <p className="carrousel-slider__index">{index+1}/{length}</p>
                    <button onClick={handleNext} id='next'><img src={next} className='scrollNext' alt='flèche suivant'/></button>
                </div>
        </figure>
    )
}

export default Carrousel