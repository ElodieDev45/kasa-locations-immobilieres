//creation composant de listing des mots clés du logement
function Tags({datasid, tags}) {
    return (
        <ul key={datasid} className="tags">
            {tags.map((tag, index) =>(
            //parcours du tableau tags pour affichage dynamique de chaque tag
                <li className="tags-unit" key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    )
}

export default Tags