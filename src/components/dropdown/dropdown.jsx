import '../dropdown/dropdown.css'
import { useState } from 'react'
import foldImg from '../../assets/fold.png'
import unfoldImg from '../../assets/unfold.png'

function Dropdown({datasid, title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article key={datasid} className={`dropdown ${isOpen ? 'active' : ''}`} id={title}>
            <button onClick={() => setIsOpen(!isOpen)} className='dropdown-button'>
                <div className='dropdown-menu'>
                    <h2>{title}</h2>
                    <div className={`dropdown-menuImg ${isOpen ? 'active' : ''}`}>
                        <img src={unfoldImg} alt='fleche ouverture' className={`dropdown-img one ${isOpen ? 'active' : ''}`}/>
                        <img src={foldImg} alt='flèche fermeture' className={`dropdown-img two ${isOpen ? 'active' : ''}`}/>
                    </div>
                </div>

                {isOpen && (
                <div className='dropdown-content'>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((equipment, index) =>(
                                <li key={index}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='dropdown-datas'>{content}</p>
                    )
                    }           
                </div>
                )}
            </button>
        </article>
    )
}

export default Dropdown