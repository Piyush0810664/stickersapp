import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Login.css'

function Login() {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <h1>Login </h1>
          <img  className="imgset" src="data:image/jpeg;base64,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"></img>
        </Col>
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  )
}

export default Login;