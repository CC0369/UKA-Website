import { Container, Row, Col } from "react-bootstrap";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="about-bx">
                            <h2>
                                About Us
                            </h2>
                            <p>
                                The UTS Korean Association aims to promote the Korean culture within the UTS community by hosting a variety of events, catered to students of all backgrounds, that broaden students abilities at both a professional and personal level.
                                Our team will also provide members with exclusive discounts with the help of our valuable sponsors.
                                Our programs include MT, dinners, games night and many more great events to be announced via our Facebook page.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="about-slider">
                                <div className="item">
                                    <h5>History</h5>
                                    <p>Established in 2013.</p>
                                </div>
                                <div className="item">
                                    <h5>Goals</h5>   
                                    <p>Spread Korean culture!</p>
                                </div>
                                <div className="item">
                                    <h5>Events</h5>
                                    <p>Make exicting memories!</p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}