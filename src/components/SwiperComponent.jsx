import 'swiper/css';
import 'swiper/css/pagination';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { dataSwiper } from '../assets/js/index.js';

const SwiperComponent = () => {
    return (
        <div className="testimonial py-5">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold my-5">Testimonial</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                }
                            }} modules={[Pagination]} className="mySwiper">
                            {
                                dataSwiper.map((element) => (
                                    <SwiperSlide key={element.id} className="shadow rounded-2">
                                        <p className="description">{element.desc}</p>
                                        <div className="people">
                                            <img src={element.image} alt={element.name} />
                                            <div>
                                                <h5 className="mb-1">{element.name}</h5>
                                                <p className="m-0 fw-bold">{element.skill}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SwiperComponent;