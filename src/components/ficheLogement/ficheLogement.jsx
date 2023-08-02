import '../ficheLogement/ficheLogement.css'

import Carrousel from "../carrousel/carrousel"
import Dropdown from "../dropdown/dropdown"
import Tags from "../tags/tags"
import Host from "../host/host"
import Rate from "../rate/rate"


function FicheLogement({datasid, title, pictures, description, hostName, hostPicture, rating, location, equipments, tags}) {
    return (
        <section className="ficheLogement">
            <Carrousel
                datasid={datasid} 
                title={title}
                pictures={pictures}
            />
            <div className='ficheLogement-nh'>
                <div className="ficheLogement-name">
                    <h2 datasid={datasid} >{title}</h2>
                    <p datasid={datasid} >{location}</p>
                </div>
                <aside className="ficheLogement-host">
                    <Host
                        datasid={datasid}
                        name={hostName}
                        picture={hostPicture}
                    />
                </aside>
            </div>
            <div className='ficheLogement-tr'>
                <Tags
                    datasid={datasid} 
                    tags={tags}            
                />
                <Rate
                    datasid={datasid} 
                    rating={rating}
                />
            </div>
            <div className="ficheLogement-details">
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
        </section>
    )
}

export default FicheLogement 