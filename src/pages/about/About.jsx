import './About.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import imgAbout from '../../components/assets/banner-about.png'


function About() {
    return(
        <div id="About">
            <Header />
            <Banner 
                img={imgAbout}
                alt={'paysage de montagne et rivière'}
            />
            <Footer />
        </div>
    )
}

export default About