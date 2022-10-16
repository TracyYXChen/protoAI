import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function Transformations(props) {
    const btnArr = ['CATEGORIZE', 'TRUE/FALSE', 'MAP', 'MAX', 'MIN', 'CUSTOM'];

    const pickBtn = (btnName) => {
        let btnDom = <Button variant="outline-dark">{btnName}</Button>;
        if(btnName === 'TRUE/FALSE') {
            btnDom = <Button variant="dark">{btnName}</Button>;
        }
        return btnDom;
    }

    return <div>
        <b>Functions: </b>{btnArr.map(item => pickBtn(item))}
        <Form>
            <Form.Group className="mb-3" controlId="formBasicReg">
            <Row>
                <Col xs={2}>
                    <Form.Label><b>If</b></Form.Label>
                </Col>

                <Col xs={3}>
                    <Form.Select aria-label="Default select example">
                        <option value="sc">score</option>
                    </Form.Select>
                </Col>

                <Col xs={3}>
                    <Form.Select aria-label="Default select example">
                        <option value="grt">greater than</option>
                        <option value="les">less than</option>
                    </Form.Select>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="70"
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

                <Col xs={3}>
                        <Form.Select aria-label="Default select example">
                            <option value="sc">True</option>
                            <option value="sc">False</option>
                        </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col xs={2}>
                        <Form.Label><b>Else</b></Form.Label>
                    </Col>

                <Col xs={3}>
                        <Form.Select aria-label="Default select example">
                            <option value="sc">False</option>
                            <option value="sc">True</option>
                        </Form.Select>
                </Col>
            </Row>


            <Row>
                <Col xs={4}>
                    <Form.Label><b>Column name</b></Form.Label>
                </Col>
                <Col xs={5}>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Authentication"
                        aria-label="threshold"
                        aria-describedby="thresholdScore"
                        />
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <Button variant="outline-primary" onClick={(e) => props.clickAuth()}>
                        Create
                    </Button>
                </Col>
            </Row>
            </Form.Group>
          </Form>
        
    </div>
}

//todo: the authentication column should be added later