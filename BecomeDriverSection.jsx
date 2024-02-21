import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";


const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src='https://wallpapercave.com/wp/wp9121954.jpg' alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Become a part of us. Just click
            </h2>

            <button className="btn become__driver-btn mt-4">
              Become a Subscriber
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;