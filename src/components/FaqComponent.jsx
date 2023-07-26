import { Container, Col, Row, Accordion } from 'react-bootstrap';

import profile from '../../config.profile.js';

const FaqComponent = () => {
  const windows = window.location.pathname === '/faq';
  return (
    <div className={windows ? "faq animate__animated animate__bounceInDown" : "faq"}>
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-down" data-aos-anchor-placement="up-center" data-aos-duration="1000">Answers People.</h2>
            <p className="text-center font-poppins fw-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam.</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {
            profile.faq.map((element) => (
              <Col key={element.id}>
                <Accordion className="shadow">
                  <Accordion.Item eventKey={element.eventKey}>
                    <Accordion.Header>{element.title}</Accordion.Header>
                    <Accordion.Body className="font-josefin">{element.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default FaqComponent;