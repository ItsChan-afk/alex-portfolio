import React, { useState, Suspense, lazy } from 'react';
import './NavBar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('../../home/Home'));
const Portfolio = lazy(() => import('../../portfolio/Portfolio'));
// const Projects = lazy(() => import('../../projects/Projects'));
const Vtubers = lazy(() => import('../../vtubers/Vtubers'));
const Commission = lazy(() => import('../../commission/Commission'));


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        <Router>
            <nav className='nav-bar'>
                <div className='menu-icon' onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
                    <li className='nav-item'>
                        <Link to='/' onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' onClick={toggleMenu}>Portfolio</Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/project' onClick={toggleMenu}>Projects</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/commission' onClick={toggleMenu}>Commission</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/vtubers' onClick={toggleMenu}>Vtubers</Link>
                    </li>
                </ul>
                {menuOpen && <div className='overlay' onClick={toggleMenu}></div>}
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    {/* <Route path='/project' element={<Projects />} /> */}
                    <Route path='/commission' element={<Commission />} />
                    <Route path='/vtubers' element={<Vtubers />} />
                </Routes>
            </Suspense>
        </Router>
       
        </>
    );
}

export default Navbar;
