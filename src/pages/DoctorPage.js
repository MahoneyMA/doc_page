import React from "react"
import Header from '../Header'
import Footer from '../Footer'
import { Row, Col,Container, Jumbotron, Figure} from 'react-bootstrap'
function Doctor(){
  return(
    <Container className = "container">
    <Header />
      <Jumbotron className = "Lead-text">
      <h1>About Dr. Timothy Milner, MD, FACS</h1>
      </Jumbotron>
      <Row>
        <Col md = {{offset: 3}}>
          <Figure >
            <Figure.Image
             width = "300"
             height = "300"
             src="assets/doc.jpg"/>
          </Figure>
        </Col>
        <Col>
          <p>Dr. Timothy Milner, MD, FACS is a fellow of the American College of
          Surgeons. He graduated from Morehouse College with a degree in biology.
          His formal training began at the University of Tennessee, Memphis,
          College of Medicine and was completed at Norfolk, Virginia, following
          a two-year vascular surgery fellowship. He is board certified in
          general surgery and vascular surgery. </p>
          <p>He has worked in Decatur at Dekalb Medical since training, and,
          in doing so over the past 10 years, has been able to contribute to
          the vascular health of the local community and build a reliable
          referral base. He specializes in venous and arterial pathology,
          limb salvage, arterial reconstructive procedures and dialysis access
          intervention. </p>
        </Col>
      </Row>
      <Footer />
    </Container>
    )}

export default Doctor
