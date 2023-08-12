import React from 'react';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import About from './pages/about/About';
import Error404 from './pages/404/404';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/styles/styles.scss';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/notFound' element={<Error404 />} />
            </Routes>
        </Router>
    )
}

export default App