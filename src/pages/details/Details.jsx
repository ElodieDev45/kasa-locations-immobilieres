//import fonctions spéciales React (hook)
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import fichier de données au format JSON
import datasLogements from '../../datas/logements.json'
//import composants
import Header from '../../components/header/header'
import FicheLogement from '../../components/ficheLogement/ficheLogement'
import Footer from '../../components/footer/footer'

function Details() {
    //const pour permettre la navigation vers une autre page
    const navigate = useNavigate();
    //const pour récupérer l'id
    const {id} =  useParams();
    //const qui renvoi les données du logement ou un statut undefined
    const logementInfos = datasLogements.find((logement) => logement.id === id);

    //gestion des pages inexistantes
    //conditions de renvoi vers page d'erreur si logementInfos est en statut "Undefined"
    useEffect(() =>{
        if (!logementInfos) {
            navigate('*');
        }
    }, [logementInfos, navigate]);
    //conditions empêchant le rendu du reste de la page si logementInfos est statut "Undefined"
    if (!logementInfos) {
        return null;
    }

    return(
        <div id="Details">
            <header>
                {/* intégration composant de l'en-tête */}
                <Header />
            </header>
            <main>
                {/* intégration composant des détails du logement */}
                <FicheLogement 
                    datasid={logementInfos.id}
                    title={logementInfos.title}
                    pictures={logementInfos.pictures}
                    hostName={logementInfos.host.name}
                    hostPicture={logementInfos.host.picture}
                    rating={logementInfos.rating}
                    location={logementInfos.location}
                    tags={logementInfos.tags}
                    //ajout d'un tableau "sections" évolutif pour catégories des dropdown
                    sections={[
                        {title: 'Description', content: logementInfos.description},
                        {title: 'Équipements', content: logementInfos.equipments.join(', ')}
                    ]}
                />
            </main>
            <footer>
                {/* intégration composant de pied de page */}
                <Footer />
            </footer>
        </div>
    )
}

export default Details