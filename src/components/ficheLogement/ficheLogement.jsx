import Carrousel from "../carrousel/carrousel"
import Dropdown from "../dropdown/dropdown"
import Tags from "../tags/tags"
import Host from "../host/host"
import Rate from "../rate/rate"


function FicheLogement({idCard, title, pictures, description, hostName, hostPicture, rating, location, equipements, tags}) {
    <main>
        <div>
            <Carrousel 
                title={title}
                pictures={pictures}
            />
            <section>
                <h2>{title}</h2>
                <p>{location}</p>
            </section>
            <aside>
                <Host 
                    idCard={idCard}
                    name={hostName}
                    picture={hostPicture}
                />
            </aside>
            <Rate 
                rating={rating}
            />
            <Tags />
            <Dropdown 
                title='Description'
                content={description}
            />
            <Dropdown
                title='Equipements'
                content={equipements}
            />
        </div>
    </main>
}

export default FicheLogement 