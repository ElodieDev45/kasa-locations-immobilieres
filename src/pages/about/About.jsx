import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import imgAbout from '../../assets/banner-about-desktop.avif'
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
            <main className='About-dropdown'>
                <article>
                    {aboutDatas.map(({id, Reliability}) => (
                        <Dropdown 
                            key={id}
                            id={id}
                            title="Fiabilité"
                            content={Reliability}
                        />
                    ))}
                </article>
                <article>
                    {aboutDatas.map(({id, Respect}) => (
                        <Dropdown 
                            key={id}
                            id={id}
                            title="Respect"
                            content={Respect}
                        />
                    ))}
                </article>
                <article>
                    {aboutDatas.map(({id, Service}) => (
                        <Dropdown 
                            key={id}
                            id={id}
                            title="Service"
                            content={Service}
                        />
                    ))}
                </article>
                <article>
                    {aboutDatas.map(({id, Security}) => (
                        <Dropdown 
                            key={id}
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