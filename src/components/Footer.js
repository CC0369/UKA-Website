import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
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
                </Row>
            </Container>
        </footer>
    )
}