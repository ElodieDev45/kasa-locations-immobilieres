function Host({datasid, name, picture}){
    return(
        <div 
            key={datasid}
            className="Host"
        >
            <h3 className='Host-name'>
                {name}
            </h3>
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