import { Container, Row, Col } from "react-bootstrap";

export const Sponsors = () => {
    return (
        <section className="sponsors" id="sponsors">
            <Container>
                <Row>
                    <Col>
                        <div className="sponsors-bx">
                            <h2>Sponsors</h2>
                            <p>Members are provided with exclusive discounts with the help of our valuable sponsors.</p>
                        </div>  
                    </Col>
                </Row>
            </Container>
        </section>
    )
}