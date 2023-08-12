//import fonctions spéciales React (hook)
import { useState } from 'react'
//import images
import foldImg from '../../assets/fold.png'
import unfoldImg from '../../assets/unfold.png'

function Dropdown({datasid, title, content}) {
    //etat d'ouverture du dropdown : par défaut fermé
    const [isOpen, setIsOpen] = useState(false);

    return (
        //button menu à cliquer
        <div key={datasid} className={`dropdown ${isOpen ? 'active' : ''}`} id={title}>
            <button onClick={() => setIsOpen(!isOpen)} className='dropdown-button'>
                <div className='dropdown-menu'>
                    <h2>{title}</h2>
                    <div className={`dropdown-menuImg ${isOpen ? 'active' : ''}`}>
                        <img src={unfoldImg} alt='fleche ouverture' className={`dropdown-img one ${isOpen ? 'active' : ''}`}/>
                        <img src={foldImg} alt='flèche fermeture' className={`dropdown-img two ${isOpen ? 'active' : ''}`}/>
                    </div>
                </div>

                {isOpen && (
                //lorsque le menu est Ouvert
                <div className='dropdown-content'>
                    {Array.isArray(content) ? (
                    //si c'est un tableau : liste
                        <ul>
                            {content.map((equipment, index) =>(
                                <li key={index}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                    //sinon : texte
                        <p className='dropdown-datas'>{content}</p>
                    )
                    }           
                </div>
                )}
            </button>
        </div>
    )
}

export default Dropdown