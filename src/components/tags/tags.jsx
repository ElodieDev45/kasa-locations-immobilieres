function Tags({id, tags}) {
    return (
        <ul key={id} className="tags">
            <li className="tag">
                {tags}
            </li>
        </ul>
    )
}

export default Tags