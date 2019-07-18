import React from 'react'
//import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { Row, Col, Container,Jumbotron, Form } from 'react-bootstrap'
export default function ReviewPage() {
  return (
    <Container className="container">
    <Header />
    <Jumbotron className = "Lead-text">
      <h1>Tell us about your visit.</h1>
      <p>
        If you enjoyed your service, or if there is something that we could
        improve on, let us know below. We appreciate all feedback.
      </p>
    </Jumbotron>
    <Form>
      <Row className = "justify-content-md-center">
        <Form.Group controlId="formBasicName">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" placeholder="First Name" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" placeholder="Last Name" />
          </Col>
        </Form.Group>
      </Row>
      <Row className = "justify-content-md-center">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Row>
    </Form>
    <Footer />
    </Container>
  )
}
