import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'
import logements from '../../datas/logements.json'


function Home() {
    return(
        <div id="Home">
            <header>
                <Header />
            </header>
            <section className='Home-banner'>
                <Banner 
                    title={'Chez vous, partout et ailleurs'}
                />
            </section>
            <main className='Cards'>
                <ul>
                    {logements.map((item) => (
                        <a href={'/details/'+ item.id} key={item.id}>
                            <Card 
                                datasid={item.id}
                                titleCard={item.title}
                                coverCard={item.cover}
                            />
                        </a>
                    ))}
                </ul>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home