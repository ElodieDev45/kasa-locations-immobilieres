//création du composant regroupant les données du propriétaire
function Host({datasid, name, picture}){
    return(
        <div 
            key={datasid}
            className="host"
        >
            <p className='host-name'>
                {name}
            </p>
            <div className='host-img'>
                <img 
                    src={picture}
                    alt={`profil de ${name}`}
                />
            </div>
        </div>
    )
}

export default Host