import './logements.css'

function handleClick(logementTitle) {
    alert(`Vous souhaitez regarder le logement ${logementTitle} ? Très bon choix ✨`);
}

function LogementsCard({id, title, cover}) {    
    return (
        <li key={id} className='LogementsCard' onClick={() => handleClick(title)}>
            <h3>{title}</h3>
            <img className='LogementsCard-cover' src={cover} alt={`${title} cover`} />
        </li>
    )
}

export default LogementsCard