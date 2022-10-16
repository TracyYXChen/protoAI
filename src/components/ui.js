import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { StateConfig } from "./stateConfig";
import Form from 'react-bootstrap/Form';
import { DefaultState } from "./defaultState";
import { FailedState } from "./failedState";
import { inputData } from './constants';

export function UI() {
    return <Row>
        <Col>
        <Form.Select aria-label="Default select example">
                        <option value="grt">Default</option>
                        <option value="les">Failed</option>
        </Form.Select>
        <DefaultState imgSrc={inputData[0][1]}></DefaultState>
        </Col>
    <Col>
    <Form.Select aria-label="Default select example">
                        <option value="grt">Failed</option>
                        <option value="les">Default</option>
        </Form.Select>
        <FailedState imgSrc={inputData[0][1]}></FailedState>
    </Col>

    <Col>
     <Tab.Container id="left-tabs-example" defaultActiveKey="properties">
     <Row>
             <Nav variant="pills" activeKey="/model">
             <Nav.Item>
                 <Nav.Link eventKey="uiEle"> <p>UI Elements</p>  </Nav.Link>
             </Nav.Item>
             <Nav.Item>
                 <Nav.Link eventKey="dataEle"> <p>Data Elements</p> </Nav.Link>
             </Nav.Item>
             <Nav.Item>
                 <Nav.Link eventKey="properties"> <p>Properties</p> </Nav.Link>
             </Nav.Item>
             </Nav>

             <Tab.Content>
             <Tab.Pane eventKey="uiEle">
             </Tab.Pane>
             <Tab.Pane eventKey="dataEle">
             </Tab.Pane>
             <Tab.Pane eventKey="properties">
                <StateConfig></StateConfig>
                 
             </Tab.Pane>
             </Tab.Content>
     </Row>
    </Tab.Container>
    </Col>
    </Row>

}