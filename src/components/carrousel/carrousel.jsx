//import fonctions spéciales React (hook)
import { useState } from "react"
//import images
import previous from '../../assets/previous.png'
import next from  '../../assets/next.png'

//création carrousel d'images
function Carrousel({datasid, title, pictures}) {
    const [index, setIndex] = useState(0);
    const length = pictures.length;

    //passer à  l'image précédente
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    //passer à l'image suivante
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        //si 1seul image pas boutons de navigation ni de compteur
        length === 1 ? (
            <figure className="carrousel" key={datasid}>
                <img
                    src={pictures[index]}
                    alt={`aperçu du logement ${title}`}
                    className='carrousel-pct'
                />
            </figure>
            ) : (
        //plus d'une image donc boutons de navigation + compteur
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
    )
}

export default Carrousel