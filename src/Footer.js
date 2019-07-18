import React from "react"
import './App.css';
import { Row, Col } from 'react-bootstrap'
function Footer(){
  return(
    <div className = "Foot">
      <Row>
        <Col><p>milnervein@gmail.com</p></Col>
      </Row>
      <Row>
        <Col><p>678-580-1149 Phone</p></Col>
      </Row>
      <Row>
        <Col><p>770-557-1347 Fax</p></Col>
      </Row>
      <Row>
        <Col><p>5700 Hillandale Dr</p></Col>
      </Row>
      <Row>
        <Col><p>Lithonia, Dekalb County 30058 Ste. 120</p></Col>
      </Row>
    </div>
  )
}
export default Footer
