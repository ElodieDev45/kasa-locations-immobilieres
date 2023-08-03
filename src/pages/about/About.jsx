import './About.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import imgAbout from '../../assets/banner-about.png'
import aboutDatas from '../../datas/about.json'
import Dropdown from '../../components/dropdown/dropdown'


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
            <main className='Dropdown'>
                <article className='About-dropdown'>
                    {aboutDatas.map(({id, Reliability}) => (
                        <Dropdown 
                            id={id}
                            title="Fiabilité"
                            content={Reliability}
                        />
                    ))}
                </article>
                <article className='About-dropdown'>
                    {aboutDatas.map(({id, Respect}) => (
                        <Dropdown 
                            id={id}
                            title="Respect"
                            content={Respect}
                        />
                    ))}
                </article>
                <article className='About-dropdown'>
                    {aboutDatas.map(({id, Service}) => (
                        <Dropdown 
                            id={id}
                            title="Service"
                            content={Service}
                        />
                    ))}
                </article>
                <article className='About-dropdown'>
                    {aboutDatas.map(({id, Security}) => (
                        <Dropdown 
                            id={id}
                            title="Sécurité"
                            content={Security}
                        />
                    ))}
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default About