import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
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
                />
            </section>
            <main className='About-dropdown'>
                <article>
                    {aboutDatas.map((datas) => (
                        <Dropdown 
                            key={datas.id}
                            datasid={datas.id}
                            title={datas.title}
                            content={datas.paragraph}
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