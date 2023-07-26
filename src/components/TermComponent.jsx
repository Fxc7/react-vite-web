import { Container, Row, Col } from 'react-bootstrap';

import FaqComponent from './FaqComponent.jsx';

const TermComponent = () => {
  return (
    <>
      <div className="term-conditions animate__animated animate__fadeInDown min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-2" data-aos="fade-down" data-aos-anchor-placement="up-center" data-aos-duration="1000">Terms And Conditions.</h1>
              <p className="text-center font-josefin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi.</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p className="font-josefin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam placeat soluta cum, ipsum, voluptas corrupti pariatur alias itaque distinctio cumque odio at nulla reprehenderit tenetur cupiditate iste reiciendis illo quia magni! Dicta deleniti non atque quas libero quo qui corrupti asperiores cum fugiat tempora ratione rem, iste eligendi. Sed ab eveniet animi ullam praesentium possimus tempora inventore illum ut quo?</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Lorem</h4>
              <p className="font-josefin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo, laudantium repellendus quos quidem, voluptas necessitatibus, explicabo dolorem ut vel neque eaque rerum recusandae cupiditate alias tempora amet cum obcaecati vitae voluptatibus in temporibus totam? Iure sed ipsa facere explicabo placeat optio, consectetur ratione eum.
              </p>
              <p className="font-josefin">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nesciunt ea et labore voluptatibus laboriosam minima beatae enim iusto magni nostrum repellat consequuntur, maiores aperiam eius reprehenderit obcaecati ipsa dolore non sed voluptate. Libero officiis tenetur doloribus. Eveniet adipisci ratione, tempora consectetur aliquid possimus deserunt molestias sunt doloremque eum quidem corrupti ab nulla? Dolorum illo, molestias quisquam molestiae delectus repellendus!
              </p>
              <p className="font-josefin">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam neque voluptate rerum quasi hic distinctio nostrum! Aliquam animi corrupti, accusamus mollitia itaque ad, modi laboriosam exercitationem commodi ex fugit nostrum ipsam nesciunt? Illo neque repellat repellendus earum quisquam perspiciatis pariatur nesciunt odit. Dicta magni eligendi eum. Ratione adipisci repudiandae sapiente dolor aut vero consequatur, nobis, quia esse natus aperiam quos deleniti odit reiciendis autem laudantium, eaque atque recusandae possimus vel dolore. Id officia odio illo sequi! Commodi, laudantium. Inventore, maiores.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Ipsum</h4>
              <p className="font-josefin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur ex hic ad rerum repudiandae, et officia quae accusamus a quaerat, tenetur placeat laudantium id exercitationem nobis doloribus incidunt perspiciatis vero dolor! Explicabo ipsam debitis dolorem culpa eaque maxime officia quas blanditiis error. Esse, quam voluptate!</p>
              <p className="font-josefin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam, sit facere itaque cumque voluptas, illum, sed nulla dolorum unde tempore impedit enim ipsa consequatur! Voluptatibus, autem sed! Recusandae nobis natus explicabo accusamus. Dolorum temporibus praesentium in illum dolore porro hic. Nam deleniti quasi voluptatem natus, quae adipisci, iusto earum tenetur fugiat quis, voluptatum neque sint voluptate autem officia ab. Maxime ab perspiciatis rem impedit tempora reiciendis voluptas cum asperiores hic? Nulla placeat nihil et quam, laboriosam aliquam quas quis suscipit dolorum nobis aspernatur obcaecati sunt maxime iusto necessitatibus voluptatibus!</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Lorem Ipsum</h4>
              <p className="font-josefin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem temporibus repellat aperiam dolores, libero possimus vel dolorum vero beatae distinctio ullam illo debitis laboriosam numquam doloremque soluta culpa cupiditate minima tempora quaerat laudantium? Quae voluptatibus non saepe iure quisquam fugit recusandae provident pariatur est eum quam velit, deleniti nam cum amet nisi labore dicta porro officia accusamus quas quos? Tenetur molestias, obcaecati ullam veritatis maxime dolorum libero et? Cum magnam nostrum velit id distinctio sequi.</p>
              <p className="font-josefin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt facilis cupiditate laboriosam rem distinctio mollitia veritatis esse expedita saepe animi possimus impedit ratione dicta doloribus enim, perferendis eaque voluptas reprehenderit, ad eveniet earum magni dolor inventore. Sapiente ducimus expedita voluptatem! Possimus voluptatem quod blanditiis.</p>
            </Col>
          </Row>
        </Container>
      </div>
      {
        window.location.pathname.length !== 1 ? <FaqComponent /> : <div></div>
      }
    </>
  );
};

export default TermComponent;