import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import './formc.css'

const FormC = () => {
  return (
    <div className="form-container"> {/* Decorative spheres */}
    <div className="sphere sphere1"></div>
    <div className="sphere sphere2"></div>
      
      <Form>
        <Row>
          <Col>
            <Form.Label>FullName*:</Form.Label>
            <Form.Control placeholder="FirstName LastName" required />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address*:</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupTourPackage">
          <Form.Label>Select Tour package*</Form.Label>
          <Form.Select>
            <option value="1">Goa</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupDate">
          <Form.Label>Arrival Date*:</Form.Label>
          <Form.Control type="date" placeholder="Select date" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupNumPersons">
        <Form.Label>Number of person*:</Form.Label>
          <Form.Control type="number" required />
        </Form.Group>

        <Form.Group className="mb-3">
        <div><Form.Label>What would you want to avail?*</Form.Label></div>
          {['Fooding', 'Boarding', 'Sight-seeing'].map((option, index) => (
            <Form.Check
              key={index}
              inline
              label={option}
              name="availOptions"
              type="checkbox"
              id={`inline-checkbox-${index}`}
            />
          ))}
        </Form.Group>

        <Form.Group className="mb-3">
          <div><Form.Label>Terms and Conditions*:</Form.Label></div>
          {['I agree', 'I Disagree'].map((option, index) => (
            <Form.Check
              key={index}
              inline
              label={option}
              name="terms"
              type="radio"
              id={`inline-radio-${index}`}
            />
          ))}
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormC;
