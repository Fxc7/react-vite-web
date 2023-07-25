import { Container, Row, Col } from 'react-bootstrap';

import { allClass } from '../assets/js/index.js';

import FaqComponent from './FaqComponent.jsx';

const AllClassComponent = () => {
    return (
        <>
            <div className="all-class min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">All Class Results.</h1>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row>
                        {
                            allClass.map((element) => (
                                <Col key={element.id} className="shadow rounded">
                                    <img src={element.image} alt={element.title} className="mb-5 rounded-top" />
                                    <div className="star mb-2 px-3">
                                        <i className={element.star1}></i>
                                        <i className={element.star2}></i>
                                        <i className={element.star3}></i>
                                        <i className={element.star4}></i>
                                        <i className={element.star5}></i>
                                    </div>
                                    <h5 className="mb-5 px-3">{element.title}</h5>
                                    <div className="information-class d-flex justify-content-between align-items-center px-3 pb-3">
                                        <p className="m-0 text-primary fw-bold">{element.price}</p>
                                        <button className="btn btn-danger rounded-1">{element.buy}</button>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            < FaqComponent />
        </>
    );
};

export default AllClassComponent;