import './Home.css'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'
import imgBanner from '../../assets/banner-home.png'
import logements from '../../datas/logements.json'


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
            <main className='Cards'>
                <ul>
                    {logements.map(({id, title, cover}) => (
                        <a href={'http://localhost:3000/Details?id='+ id} key={id}>
                        <Card 
                            datasid={id}
                            titleCard={title}
                            coverCard={cover}
                        />
                        </a>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default Home