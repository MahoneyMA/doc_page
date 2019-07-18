import React from 'react'
//import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import {Container,Accordion, Card, Button, Jumbotron } from 'react-bootstrap'
export default function ServicesPage() {
  return (
    <Container className="container">
    <Header />
      <Jumbotron className = "Lead-text">
    <h1>Services</h1>
    <p>
      We provide a number of treatments and services to suit the needs
       of our patients.
    </p>
    <p>
      See below for your treatment options.
    </p>
  </Jumbotron>
      <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Aortic Aneurysm
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>A Comprehensive Approach
          This condition Is and enlargement of the aorta, the main blood vessel that deliver blood to the body, at the level of the abdomen.</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Carotid Artery Disease
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body> Narrowing of the blood vessels in the neck that carries blood from the heart to the brain.</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
          Deep Vein Thrombosis
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body> A blood clot in deep vein, usually in the legs.</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="3">
          Dialysis Access Managment
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="3">
        <Card.Body> Dialysis is the clinical purification of blood by dialysis, as a substitute for the normal dfunction of the kidney. </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="4">
          Leg Cramps/ Peripheral Artery
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="4">
        <Card.Body> A circulatory condition in which narrowed blood vessels reduce blood flow to the limbs.</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="5">
          Leg Swelling
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="5">
        <Card.Body> Improper functioning of the vein valves in the leg, causing swelling and skin changes.</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
      <Footer />
    </Container>
  )
}
