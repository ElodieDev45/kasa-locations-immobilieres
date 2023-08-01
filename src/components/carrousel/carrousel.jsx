function Carrousel({title, pictures}) {
    return (
        <img
            key={pictures} 
            src={pictures}
            alt={`aperçu du logement ${title}`}
        />
    )
}

export default Carrousel