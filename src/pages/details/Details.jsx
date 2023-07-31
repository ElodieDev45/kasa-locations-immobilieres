import './Details.css'
import Header from '../../components/header/header'
import FicheLogement from '../../components/ficheLogement/ficheLogement'
import Footer from '../../components/footer/footer'

function Details() {
    return(
        <div id="Details">
            Details
            <Header />
            <main>
                <FicheLogement />
            </main>
            <Footer />
        </div>
    )
}

export default Details