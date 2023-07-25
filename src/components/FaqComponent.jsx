import { Container, Col, Row, Accordion } from 'react-bootstrap';

import { faq } from '../assets/js/index.js';

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold">Answers People.</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {
            faq.map((element) => (
              <Col key={element.id}>
                <Accordion className="shadow">
                  <Accordion.Item eventKey={element.eventKey}>
                    <Accordion.Header>{element.title}</Accordion.Header>
                    <Accordion.Body>{element.desc}</Accordion.Body>
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