import Carrousel from "../carrousel/carrousel"
import Dropdown from "../dropdown/dropdown"
import Tags from "../tags/tags"
import Host from "../host/host"
import Rate from "../rate/rate"


function FicheLogement({datasid, title, pictures, description, hostName, hostPicture, rating, location, equipments, tags}) {
    return (
        <section className="ficheLogement">
            <div className='ficheLogement-carrousel'>
                <Carrousel
                    datasid={datasid} 
                    title={title}
                    pictures={pictures}
                />
            </div>
            <div className='ficheLogement-head'>
                <h1 datasid={datasid} className="ficheLogement-head__name">{title}</h1>
                <p datasid={datasid} className="ficheLogement-head__location">{location}</p>
                <aside className="ficheLogement-head__host">
                    <Host
                        datasid={datasid}
                        name={hostName}
                        picture={hostPicture}
                    />
                </aside>
                <div className='ficheLogement-head__tags'>
                    <Tags
                    datasid={datasid} 
                    tags={tags}            
                    />
                </div>
                <div className='ficheLogement-head__rate'>
                    <Rate
                        datasid={datasid} 
                        rating={rating}
                    />
                </div>
            </div>
            <div className="ficheLogement-details">
                <article className='ficheLogement-details__dropdown un'>
                    <Dropdown
                        datasid={datasid} 
                        title='Description'
                        content={description}
                    />
                </article>
                <article className='ficheLogement-details__dropdown deux'>
                    <Dropdown
                        datasid={datasid}
                        title='Equipements'
                        content={equipments}
                    />
                </article>
            </div>
        </section>
    )
}

export default FicheLogement 