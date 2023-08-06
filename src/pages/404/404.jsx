import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ErrorComponent from '../../components/errorComponent/errorComponent'

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