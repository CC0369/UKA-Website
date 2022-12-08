import { Container, Row, Col } from "react-bootstrap";

export const Events = () => {
    return (
        <section className="events" id="events">
            <Container>
                <Row>
                    <Col>
                        <div className="events-bx">
                            <h2>Events</h2>
                            <p>Members are provided with exclusive discounts with the help of our valuable sponsors.</p>
                        </div>  
                    </Col>
                </Row>
            </Container>
        </section>
    )
}