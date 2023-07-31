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
                    <Card 
                        idCard={id}
                        titleCard={title}
                        coverCard={cover}
                    />
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default Home