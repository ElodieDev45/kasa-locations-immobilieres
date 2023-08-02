import '../tags/tags.css'

function Tags({datasid, tags}) {
    return (
        <ul key={datasid} className="tags">
            {tags.map((tag, index) =>(
                <li className="tag" key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    )
}

export default Tags