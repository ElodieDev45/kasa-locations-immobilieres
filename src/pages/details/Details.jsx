import Header from '../../components/header/header'
import FicheLogement from '../../components/ficheLogement/ficheLogement'
import Footer from '../../components/footer/footer'
import datasLogements from '../../datas/logements.json'
import { useParams } from 'react-router-dom';


function Details() {
    const {id} =  useParams();
    const logementInfos = datasLogements.find((logement) => logement.id === id)
    console.log(logementInfos);
    return(
        <div id="Details">
            <header>
                <Header />
            </header>
            <main>
                <FicheLogement 
                    datasid={logementInfos.id}
                    title={logementInfos.title}
                    pictures={logementInfos.pictures}
                    description={logementInfos.description}
                    hostName={logementInfos.host.name}
                    hostPicture={logementInfos.host.picture}
                    rating={logementInfos.rating}
                    location={logementInfos.location}
                    equipments={logementInfos.equipments}
                    tags={logementInfos.tags}
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Details