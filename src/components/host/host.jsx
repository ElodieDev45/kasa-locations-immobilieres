//création du composant regroupant les données du propriétaire
function Host({datasid, name, picture}){
    return(
        <div 
            key={datasid}
            className="Host"
        >
            <p className='Host-name'>
                {name}
            </p>
            <div className='Host-img'>
                <img 
                    src={picture}
                    alt={`profil de ${name}`}
                />
            </div>
        </div>
    )
}

export default Host