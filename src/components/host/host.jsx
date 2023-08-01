function Host({datasid, name, picture}){
    return(
        <div 
            key={datasid}
            className="Host"
        >
            <h3>
                {name}
            </h3>
            <img 
                src={picture}
                alt={`profil de ${name}`}
                className="Host-img"
            />
        </div>
    )
}

export default Host