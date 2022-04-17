import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className='nav'>
            <Container>
                <Navbar.Brand ><Link className='logo' to='/home'><img width={50} src="https://i.pinimg.com/474x/6d/ea/19/6dea1922212035a0cf51ec87d1b4675a--travel-logo-tours.jpg" alt="" srcset="" /> Dream Tour</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home#services">Services</Nav.Link>
                        <Nav.Link> <CustomLink to='/checkout'>Checkout</CustomLink></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link ><CustomLink to='/blog'>Blog</CustomLink></Nav.Link>
                        <Nav.Link >
                            <CustomLink to='/about'>About me</CustomLink>
                        </Nav.Link>
                        {user ? <Nav.Link onClick={handleSignout}>
                            <CustomLink to='/login'>SignOut</CustomLink>
                        </Nav.Link>
                            :
                            <Nav.Link >
                                <CustomLink to='/login'>SignIn</CustomLink>
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;