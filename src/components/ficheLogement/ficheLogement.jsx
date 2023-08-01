import Carrousel from "../carrousel/carrousel"
import Dropdown from "../dropdown/dropdown"
import Tags from "../tags/tags"
import Host from "../host/host"
import Rate from "../rate/rate"


function FicheLogement({id, title, pictures, description, hostName, hostPicture, rating, location, equipments, tags}) {
    return (
        <main>
            <div>
                <Carrousel
                    id={id} 
                    title={title}
                    pictures={pictures}
                />
                <section>
                    <h2 id={id} >{title}</h2>
                    <p id={id} >{location}</p>
                </section>
                <aside>
                    <Host
                        id={id}
                        name={hostName}
                        picture={hostPicture}
                    />
                </aside>
                <Rate
                    id={id} 
                    rating={rating}
                />
                <Tags
                    id={id} 
                    tags={tags}            
                />
                <Dropdown
                    id={id} 
                    title='Description'
                    content={description}
                />
                <Dropdown
                    id={id}
                    title='Equipements'
                    content={equipments}
                />
            </div>
        </main>
    )
}

export default FicheLogement 