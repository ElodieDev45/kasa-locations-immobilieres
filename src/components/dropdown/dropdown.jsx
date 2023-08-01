import '../dropdown/dropdown.css'

function Dropdown({datasid, title, content}) {
    return (
        <article key={datasid} className='dropdown' id={title}>
            <button type="button" className='dropdown-button'>
                {title}
                <p>↕️</p>
            </button>
            <div className='dropdown-content'>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((equipment, index) =>(
                            <li key={index} className='dropdown-equipment'>
                                {equipment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='dropdown-equipment'>{content}</p>
                )
                }           
            </div>
        </article>
    )
}

export default Dropdown