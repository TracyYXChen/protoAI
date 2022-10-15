import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function FaceIDCard(props) {
    function runModel(e) {
        //todo: add a validation step
        props.updateRunStatus(true);
    }

    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicReg">
          <Row>
            <Col xs={6}>
                <Form.Label>Registration</Form.Label>
            </Col>

            <Col xs={6}>
                <Form.Select aria-label="Default select example">
                    <option>Select a data column</option>
                    <option value="reg">FaceID_Reg</option>
                    <option value="face">FaceID_Face</option>
                    <option value="lb">GT_Label</option>
                </Form.Select>

            </Col>
        </Row>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicFace">
            <Row>
                <Col xs={6}>
                    <Form.Label>Face input</Form.Label>
                </Col>
                <Col xs={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Select a data column</option>
                        <option value="reg">FaceID_Reg</option>
                        <option value="face">FaceID_Face</option>
                        <option value="lb">GT_Label</option>
                    </Form.Select>
                </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAuth">
            <Row>
                <Col xs={6}>
                    <Form.Label>Auth (ground truth)</Form.Label>
                </Col>
                <Col xs={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Select a data column</option>
                        <option value="reg">FaceID_Reg</option>
                        <option value="face">FaceID_Face</option>
                        <option value="lb">GT_Label</option>
                    </Form.Select>
                </Col>
            </Row>
          </Form.Group>

          <Row>
            <Col xs={6}>
            <Button variant="outline-primary" onClick={runModel}>
                RUN ALL
            </Button>
            </Col>
            <Col xs={6}>
            <Button variant="outline-primary">
                RUN SELECTED
            </Button>
            </Col>
          </Row>
        </Form>
      );
}