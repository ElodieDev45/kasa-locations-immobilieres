import './About.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import imgAbout from '../../assets/banner-about.png'


function About() {
    return(
        <div id="About">
            <header>
                <Header />
            </header>
            <section className='About-banner'>
                <Banner 
                    img={imgAbout}
                    alt={'paysage de montagne et rivière'}
                />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default About