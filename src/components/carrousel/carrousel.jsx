function Carrousel({datasid, title, pictures}) {
    return (
        <div className="carroussel" key={datasid}>
            <figure>
                {pictures.map((picture, index) =>(
                    <img
                        key={index} 
                        src={picture}
                        alt={`aperçu du logement ${title}`}
                    />
                ))}
            </figure>
        </div>
    )
}

export default Carrousel