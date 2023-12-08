import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
// import {Link} from 'react-scroll';
import { HashLink as Link } from "react-router-hash-link";

import HomePage from '../../Pages/Home/Home'
import Skills from '../../Pages/Skills/Skills'
import About from '../../Pages/About/About'
import Contact from '../../Pages/Contact/Contact'

function NavBar() {
    return (
        <>
            {/* <Navbar bg="#040720"  className='Navbar' data-bs-theme="dark"> */}
            {/* <Container claaName="justify-content-center flex-grow-0">
                    <Nav> */}
            {/* <Nav.Item> */}
            {/* <Nav.Link href="/home">HOME</Nav.Link> */}

            {/* <Link to='#home' smooth>Home</Link> */}
            {/* </Nav.Item> */}
            {/* <Nav.Item> */}
            {/* <Nav.Link href="/skills">SKILLS</Nav.Link> */}
            {/* <Link to='#skills' smooth>Skills</Link> */}
            {/* </Nav.Item> */}
            {/* <Nav.Item> */}
            {/* <Nav.Link href="/about">ABOUT</Nav.Link> */}
            {/* <Link to='#about' smooth>About</Link> */}
            {/* </Nav.Item> */}
            {/* <Nav.Item> */}
            {/* <Nav.Link href="/about">ABOUT</Nav.Link> */}
            {/* <Link to='#contact' smooth>Contact</Link> */}
            {/* </Nav.Item> */}
            {/* </Nav> */}
            {/* </Container> */}
            {/* </Navbar> */}


            <nav>
                <div className="title">
                    <Link to='#home' smooth className='title'>PortFolio</Link>
                </div>
                <div className="list">
                <ul>
                    {/* <div className='nav-div'> */}
                    <li>
                        <Link to='#home' smooth>Home</Link>
                    </li>
                    <li>
                        <Link to='#skills' smooth>Skills</Link>
                    </li>
                    {/* <li>
                        <Link to='#about' smooth>About</Link>
                    </li> */}
                    <li>
                        <Link to='#contact' smooth>Contact</Link>
                    </li>
                    {/* </div> */}
                </ul>
                </div>
            </nav>













        </>
    );
}

export default NavBar;