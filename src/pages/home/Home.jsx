import './Home.css'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'

function Home() {
    return(
        <div id="Home">
            <Header />
            <div className='Home-Banner'><h1>Chez vous, partout et ailleurs</h1><Banner /></div>
            <Card />
            <Footer />
        </div>
    )
}

export default Home