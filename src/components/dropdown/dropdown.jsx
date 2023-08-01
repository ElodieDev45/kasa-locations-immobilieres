import '../dropdown/dropdown.css'

function Dropdown({id, title, content}) {
    return (
        <article key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    )
}

export default Dropdown