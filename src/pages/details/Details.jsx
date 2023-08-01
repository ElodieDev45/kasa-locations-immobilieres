import './Details.css'
import Header from '../../components/header/header'
import FicheLogement from '../../components/ficheLogement/ficheLogement'
import Footer from '../../components/footer/footer'
import datasLogements from '../../datas/logements.json'


function Details() {
    const idLogement =  new URLSearchParams(window.location.search).get('id');
    console.log('id logement :', idLogement);
    
    const logementInfos = datasLogements.find((logement) => logement.id === idLogement)
    console.log('infos logement :', logementInfos);
    
    return(
        <div id="Details">
            <Header />
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
            <Footer />
        </div>
    )
}

export default Details