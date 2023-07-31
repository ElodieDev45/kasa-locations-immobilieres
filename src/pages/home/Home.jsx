import './Home.css'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'
import imgBanner from '../../components/assets/banner-home.png'

function Home() {
    return(
        <div id="Home">
            <Header />
            <section className='Home-Banner'>
                <Banner 
                    img={imgBanner}
                    alt={'paysage de falaise'}
                    title={'Chez vous, partout et ailleurs'}
                />
            </section>
            <Card />
            <Footer />
        </div>
    )
}

export default Home