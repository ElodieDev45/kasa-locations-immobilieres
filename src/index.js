import React from 'react';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import About from './pages/about/About';
import Error404 from './pages/404/404';
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Details' element={<Details />} />
      <Route path='/about' element={<About />} />
      <Route path='/404' element={<Error404 />} />
    </Routes>
  </>
)
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// reportWebVitals();
