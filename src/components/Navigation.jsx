import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap'

function Navigation({ settings }) {
    let newSettings = { ...settings };
    const [brand, setBrand] = useState(newSettings?.brand || "");
    return (
        <nav>
            <Navbar className='ps-1 pe-1 bg-dark navbar-dark fixed-top' expand="lg">
                <Navbar.Brand className='text-white' href="#app">{brand !== "" ? brand : "BidWriter"}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white' href="#app">Home</Nav.Link>
                        <Nav.Link className='text-white' href="#features">Features</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}

export default Navigation;