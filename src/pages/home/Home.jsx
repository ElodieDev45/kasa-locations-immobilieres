//import fichier de données au format json
import logements from '../../datas/logements.json'
//import composants
import Header from '../../layout/header/header'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import Footer from '../../layout/footer/footer'


function Home() {
    return(
        <div id="Home">
            <header>
                {/* intégration de l'en-tête */}
                <Header />
            </header>
            <section className='home-banner'>
                {/* intégration du composant de la bannière image (image en background SCSS) */}
                <Banner 
                    title={'Chez vous, partout et ailleurs'}
                />
            </section>
            <main className='cards'>
                <ul>
                    {logements.map((item) => (
                    //parcours des données du fichier
                        <a href={'/details/'+ item.id} key={item.id}>
                            {/* intégration du composant de logement unitaire */}
                            <Card 
                                datasid={item.id}
                                titleCard={item.title}
                                coverCard={item.cover}
                            />
                        </a>
                    ))}
                </ul>
            </main>
            <footer>
                {/* intégration du composant de pied de page */}
                <Footer />
            </footer>
        </div>
    )
}

export default Home