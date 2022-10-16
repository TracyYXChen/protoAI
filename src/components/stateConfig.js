import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";

export function StateConfig() {
    return (<Form>
            <Form.Group className="mb-3" controlId="formBasicReg">
            <Row>
                <Col xs={1}>
                    <Form.Label><b>If</b></Form.Label>
                </Col>

                <Col xs={4}>
                    <Form.Select aria-label="Default select example">
                        <option value="sc">score</option>
                    </Form.Select>
                </Col>

                <Col xs={5}>
                    <Form.Select aria-label="Default select example">
                        <option value="grt">greater than</option>
                        <option value="les">less than</option>
                    </Form.Select>
                </Col>
                <Col xs={2}>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="50"
                        aria-label="threshold"
                        aria-describedby="thresholdScore"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                        <Form.Label><b>Then</b></Form.Label>
                    </Col>

                <Col xs={6}>
                        <Form.Select aria-label="Default select example">
                            <option value="sc">Default</option>
                            <option value="sc">Failed</option>
                        </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col xs={2}>
                        <Form.Label><b>Else</b></Form.Label>
                    </Col>

                <Col xs={6}>
                        <Form.Select aria-label="Default select example">
                            <option value="sc">Failed</option>
                            <option value="sc">Default</option>
                        </Form.Select>
                </Col>
            </Row>


            <Row>
                <Col xs={3}>
                    <Form.Label><b>State name</b></Form.Label>
                </Col>
                <Col xs={5}>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="authentication"
                        aria-label="threshold"
                        aria-describedby="thresholdScore"
                        />
                    </InputGroup>
                </Col>
                <Col xs={4}>
                    <Button variant="outline-primary">
                        Add state
                    </Button>
                </Col>
            </Row>
            </Form.Group>
          </Form>)

}