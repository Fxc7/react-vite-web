import { Container, Row, Col } from 'react-bootstrap';

import profile from '../../config.profile.js';

import FaqComponent from './FaqComponent.jsx';

const TestimonialComponent = () => {
  return (
    <>
      <div className="testimonial animate__animated animate__fadeInDown">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold">All Testimonials.</h1>
              <p className="text-center font-josefin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illo?</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {
              profile.testimonial.map((element) => (
                <Col key={element.id} className="mb-5 shadow rounded">
                  <p className="description">{element.desc}</p>
                  <div className="people">
                    <img src={element.image} alt={element.name} />
                    <div>
                      <h5 className="mb-1">{element.name}</h5>
                      <p className="m-0 fw-bold">{element.skill}</p>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </>
  );
};

export default TestimonialComponent;