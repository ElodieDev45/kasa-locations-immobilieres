import '../dropdown/dropdown.css'
import foldImg from '../../assets/fold.png'
import unfoldImg from '../../assets/unfold.png'

function Dropdown({datasid, title, content}) {
    return (
        <article key={datasid} className='dropdown' id={title}>
            <button type="button" className='dropdown-button'>
                <h2>{title}</h2>
                <div className='dropdown-buttonImg'>
                    <img src={foldImg} alt='fleche pour ouvrir' className='dropdown-img one'/>
                    <img src={unfoldImg} alt='flèche pour fermer' className='dropdown-img two'/>
                </div>
            </button>
            <div className='dropdown-content'>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((equipment, index) =>(
                            <li key={index} className='dropdown-datas'>
                                {equipment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='dropdown-datas'>{content}</p>
                )
                }           
            </div>
        </article>
    )
}

export default Dropdown