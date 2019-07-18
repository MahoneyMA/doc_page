import React from "react"
import Header from '../Header'
import Footer from '../Footer'
import {Container, Jumbotron } from 'react-bootstrap'
function Contact(){
  return(
    <Container className = "container">
    <Header />
      <Jumbotron className = "Lead-text">
      <h1>Get in touch</h1>
      <p>
      If you feel it is the appropriate time to see the doctor, get in contact
      and let's schedule and appointment.
      </p>
      <p>
      See below for your treatment options.
      </p>
      </Jumbotron>
      <Footer />
    </Container>
    )}

export default Contact
