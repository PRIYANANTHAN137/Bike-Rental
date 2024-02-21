import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";


const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Rentify Bike Rentals</h2>
              <p className="section__description">
              Dear Rentify Family,
              We are thrilled to welcome you to our vibrant and dynamic community at Rentify Bike Rentals.
              As you step into our world, you are not just joining a company,
              you are becoming an integral part of a family driven by passion, 
              innovation, and a shared commitment to excellence.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>
                  We envision Rentify Bike Rentals as a global leader, recognized for its excellence.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/354/medium/310R-BMW_%281%29.png?1672321477' alt="about" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;