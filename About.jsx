import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src='https://th.bing.com/th/id/OIP._KcvrywWnnoOH_Mqb6mkUwHaEK?rs=1&pid=ImgDetMain' alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Keep your attention on the road at all times.
                Avoid distractions such as texting, talking on the phone, or adjusting the radio while driving.
                Never drive under the influence of alcohol, drugs, or medications that can impair your ability to drive.
                If you're feeling drowsy, pull over and take a break.
                Keep emotions in check and avoid aggressive behaviors such as tailgating or road rage.
                Stay calm in traffic and be patient with other drivers.
                </p>

                <p className="section__description">
                Keep a safe distance from the vehicle in front of you to allow for reaction time.
                The "three-second rule" is a good guideline for maintaining a safe following distance.
                eep your vehicle in good condition by adhering to regular maintenance schedules.
                Check tire pressure, brakes, lights, and fluid levels regularly
                Be aware of current traffic conditions and any road closures.
                Use navigation apps for real-time updates on traffic and route changes 
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+91 9362861717</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;