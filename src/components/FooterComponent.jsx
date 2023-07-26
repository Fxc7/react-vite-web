import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import profile from '../../config.profile.js';

const FooterComponent = () => {
  const date = new Date();
  return (
    <div className="footer animate__animated animate__fadeInDown py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">{profile.footer_title}</h3>
            <p className="description font-josefin fw-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et veniam possimus ipsa neque, libero dicta facilis nulla dignissimos iusto repellendus.</p>
            <div className="github mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-github"></i>
                <p className="m-0 fw-bold" onClick={() => window.open(`https://github.com/${profile.user.github}`, '_blank')}>Fxc7</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0 fw-bold" onClick={() => window.open(`mailto:${profile.user.email}`, '_blank')}>farhanxcode7@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="" className="font-poppins fw-600">Home</Link>
            <Link to="classes" className="font-poppins fw-600">Classes</Link>
            <Link to="testimonial" className="font-poppins fw-600">Testimonial</Link>
            <Link to="faq" className="font-poppins fw-600">FAQ</Link>
            <Link to="terms" className="font-poppins fw-600">Terms And Conditions</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe For Interesting Things.</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              {
                profile.user.whatsapp ? <i className="fa-brands fa-whatsapp" onClick={() => window.open(`https://wa.me/+${profile.user.whatsapp}`, '_blank')}></i> : ''
              }
              {
                profile.user.instagram ? <i className="fa-brands fa-instagram" onClick={() => window.open(`https://www.instagram.com/${profile.user.instagram}`, '_blank')}></i> : ''
              }
              {
                profile.user.facebook ? <i className="fa-brands fa-facebook" onClick={() => window.open(`https://www.facebook.com/${profile.user.facebook}`, '_blank')}></i> : ''
              }
              {
                profile.user.twitter ? <i className="fa-brands fa-twitter" onClick={() => window.open(`https://twitter.com/${profile.user.twitter}`, '_blank')}></i> : ''
              }
              {
                profile.user.linkedin ? <i className="fa-brands fa-linkedin" onClick={() => window.open(`https://www.linkedin.com/in/${profile.user.linkedin}`, '_blank')}></i> : ''
              }
              {
                profile.user.youtube ? <i className="fa-brands fa-youtube" onClick={() => window.open(`https://www.youtube.com/${profile.user.youtube}`, '_blank')}></i> : ''
              }
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3 fw-400">&copy; Copyright {date.getFullYear()} By <span className="fw-bold">{profile.copyright}</span>, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent;