import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiceLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiceLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiceLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiceLink('projects')}>Projects</Nav.Link>

                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#social"><img src={navIcon1} alt=""/></a>
                        <a href="#social"><img src={navIcon2} alt=""/></a>
                        <a href="#social"><img src={navIcon3} alt=""/></a>
                    </div>
                    <button className="contactButton" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )   
}