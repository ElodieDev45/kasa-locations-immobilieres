import Carrousel from "../carrousel/carrousel"
import Dropdown from "../dropdown/dropdown"
import Tags from "../tags/tags"
import Host from "../host/host"
import Rate from "../rate/rate"


function FicheLogement({datasid, title, pictures, description, hostName, hostPicture, rating, location, equipments, tags}) {
    return (
        <main>
            <div>
                <Carrousel
                    datasid={datasid} 
                    title={title}
                    pictures={pictures}
                />
                <section>
                    <h2 datasid={datasid} >{title}</h2>
                    <p datasid={datasid} >{location}</p>
                </section>
                <aside>
                    <Host
                        datasid={datasid}
                        name={hostName}
                        picture={hostPicture}
                    />
                </aside>
                <Rate
                    datasid={datasid} 
                    rating={rating}
                />
                <Tags
                    datasid={datasid} 
                    tags={tags}            
                />
                <div>
                    <Dropdown
                        datasid={datasid} 
                        title='Description'
                        content={description}
                    />
                    <Dropdown
                        datasid={datasid}
                        title='Equipements'
                        content={equipments}
                    />
                </div>
            </div>
        </main>
    )
}

export default FicheLogement 