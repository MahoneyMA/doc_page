import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { Carousel, Container } from 'react-bootstrap'
export default function HomePage() {
  return (
    <Container fluid = {true} className="container">
    <Header />
    <Carousel>
      <Carousel.Item>
          <img
              className="d-block w-100"
              src="assets/1.jpg"
              height = "720"
              width = "1280"
              alt="First slide"
          />
        <Carousel.Caption>
          <Link to = '/services'><h3>Services</h3></Link>
          <p>MVV will provide vascular surgery care for the adult and elderly population as well as providing multiple procedures to create a vascular care solution. MVV will provide procedures including, but not limited to saphenous vein ablation, varicose vein excision, peripheral angiography with intervention involving the lower extremities and hospital-based procedures including dialysis access creation and aneurysm repair. The value of the practice will rely on the ability to improve the vascular health of patients within the office setting, keeping hospital-based procedures to a minimum..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/2.jpg"
          height = "720"
          width = "1280"
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height = "720"
          width = "1280"
          src="assets/3.jpg"
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>
            <Footer />
  </Container>
  )
}
