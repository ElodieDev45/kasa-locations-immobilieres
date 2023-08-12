//import des composants
import Carrousel from "../carrousel/carrousel"
import Dropdown from "../dropdown/dropdown"
import Tags from "../tags/tags"
import Host from "../host/host"
import Rate from "../rate/rate"

//composition fiche descriptive d'un logement
function FicheLogement({datasid, title, pictures, hostName, hostPicture, rating, location, tags, sections}) {
    return (
        <section className="ficheLogement">
            <div className='ficheLogement-carrousel'>
                {/* import carrousel des photos du logement */}
                <Carrousel
                    datasid={datasid} 
                    title={title}
                    pictures={pictures}
                />
            </div>
            <div className='ficheLogement-head'>
                {/* nom et localisation du logement */}
                <h1 datasid={datasid} className="ficheLogement-head__name">{title}</h1>
                <p datasid={datasid} className="ficheLogement-head__location">{location}</p>
                <aside className="ficheLogement-head__host">
                    {/* import composant infos propriétaire */}
                    <Host
                        datasid={datasid}
                        name={hostName}
                        picture={hostPicture}
                    />
                </aside>
                <div className='ficheLogement-head__tags'>
                    {/* import composant mot-clés "tags" */}
                    <Tags
                        datasid={datasid} 
                        tags={tags}            
                    />
                </div>
                <div className='ficheLogement-head__rate'>
                    {/* import composant avis client */}
                    <Rate
                        datasid={datasid} 
                        rating={rating}
                    />
                </div>
            </div>
            <div className="ficheLogement-details">
                {/* import composant dropdown dynamique*/}
                {sections.map((section, index) =>
                //parcours des données du tableau "sections" de la page details
                    <article key={index} className={`ficheLogement-details__dropdown ${section.title}`}>
                        <Dropdown
                            datasid={datasid}
                            title={section.title}
                            content={section.content}
                        />
                    </article>
                )}
            </div>
        </section>
    )
}

export default FicheLogement 