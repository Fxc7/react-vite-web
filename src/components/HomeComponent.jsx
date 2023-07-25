import { Container, Row, Col } from 'react-bootstrap';

import heroImage from '../assets/images/hero.png';

const HomeComponent = () => {
    return (
        <div className="home-page">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="header-box d-flex align-items-center pt-lg-5">
                        <Col lg="6">
                            <h1 className="mb-4">
                                Discover <br /> Your Creative Talents <br /> with Us.
                            </h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio adipisci laudantium reprehenderit nobis doloremque ipsa.</p>
                            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 fw-bold">See Classes</button>
                            <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 fw-bold">See Promotions</button>
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={heroImage} alt="hero images" />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
};

export default HomeComponent;
