//import des composants
import Header from '../../layout/header/header'
import Footer from '../../layout/footer/footer'
import Banner from '../../components/banner/banner'
import Dropdown from '../../components/dropdown/dropdown'
//import fichier de données au format JSON
import aboutDatas from '../../datas/about.json'

//affichage articles A propos avec dropdown dynamique
function About() {
    return(
        <div id="About">
            <header>
                {/* intégration entête de page */}
                <Header />
            </header>
            <section className='About-banner'>
                {/* intégration bannière */}
                <Banner 
                />
            </section>
            <main className='About-dropdown'>
                {/* intégration dropdown dynamique */}
                {aboutDatas.map((datas) => (
                //parcours données aboutDatas pour dropdown dynamique
                    <article key={datas.id} className={`${datas.title}`}>
                            <Dropdown 
                                key={datas.id}
                                datasid={datas.id}
                                title={datas.title}
                                content={datas.paragraph}
                            />
                    </article>
                ))}
            </main>
            <footer>
                {/* intégration pied de page */}
                <Footer />
            </footer>
        </div>
    )
}

export default About