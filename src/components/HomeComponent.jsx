import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import heroImage from '../assets/images/hero.png';

const HomeComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
                <Container>
                    <Row className="header-box d-flex align-items-center pt-lg-5">
                        <Col lg="6">
                            <h1 className="mb-4 animate__animated animate__bounceInUp animate__delay-1s">
                                Discover <br /> Your Creative Talents <br /> with Us.
                            </h1>
                            <p className="mb-4 animate__animated animate__bounceInUp animate__delay-1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio adipisci laudantium reprehenderit nobis doloremque ipsa.</p>
                            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 fw-bold animate__animated animate__bounceInUp animate__delay-1s" onClick={() => navigate('/classes')}>See Classes</button>
                            <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 fw-bold animate__animated animate__bounceInUp animate__delay-1s" onClick={() => window.open('https://github.com/Fxc7/react-vite-web', '_blank')}>Source Code</button>
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={heroImage} alt="hero images" className="animate__animated animate__bounceInUp animate__delay-1s" />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
};

export default HomeComponent;
