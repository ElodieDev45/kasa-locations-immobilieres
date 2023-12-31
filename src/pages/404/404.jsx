//import des composants
import Header from '../../layout/header/header'
import Footer from '../../layout/footer/footer'
import ErrorComponent from '../../components/errorComponent/errorComponent'

//affichage page d'erreur code HTTP 404
function Error404() {
    return(
        <div id="error404">
            <header>
                <Header />
            </header>
            <main className='main-error'>
                <ErrorComponent 
                    errorNumber={404}
                    errorText={"Oups! La page que vous demandez n'existe pas"}
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Error404