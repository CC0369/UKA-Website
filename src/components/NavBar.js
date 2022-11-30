
import { Nav, Container} from "react-bootstrap";

export const NavBar = () => {


    return (
            <Container>
                <Nav className="navbar">
                    <ul className="ms-auto">
                        <a href='/' className='nav-link'>
                            Home
                        </a>
                        <a href='/about' className='nav-link'>
                            About Us
                        </a>
                        <a href='/sponsors' className='nav-link'>
                            Sponsors
                        </a>
                        <a href='/events' className='nav-link'>
                            Events
                        </a>
                        <a href='/contact' className='nav-link'>
                            Contact Us
                        </a>
                    </ul>
                </Nav>
            </Container>

    )
}