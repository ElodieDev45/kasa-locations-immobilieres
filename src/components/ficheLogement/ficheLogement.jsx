import Carrousel from "../carrousel/carrousel"
import Dropdown from "../dropdown/dropdown"
import Tags from "../tags/tags"
import Host from "../host/host"
import Rate from "../rate/rate"

function FicheLogement() {
    <main>
        <div>
            <Carrousel />
            <section>
                <h2>titre</h2>
                <p>location</p>
            </section>
            <Host />
            <Rate />
            <Tags />
            <Dropdown />
        </div>
    </main>
}

export default FicheLogement 