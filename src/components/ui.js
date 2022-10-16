import { Button } from "react-bootstrap";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { StateConfig } from "./stateConfig";
import Form from 'react-bootstrap/Form';

export function UI() {
    const phoneStyle = {
        width: '300px',
        height: '600px',
        margin: '40px',
        border: '2px solid gray',
        borderRadius: '40px',
        position: 'relative'
    };

    const screenStyle = {
        width: '270px',
        height: '540px',
        
        border: '2px solid gray',
        borderRadius: '30px',
        position: 'absolute',
        top: '40px',
        left: '15px'
    }

    const widgetCircle = {
        width: '20px',
        height: '20px',
        border: '2px solid gray',
        borderRadius: '10px',
        position: 'absolute',
        top: '10px',
        left: '80px'
    }

    const widgetRod = {
        width: '80px',
        height: '10px',
        border: '2px solid gray',
        borderRadius: '10px',
        position: 'absolute',
        top: '15px',
        left: '120px'
    }

    const imgDiv = {
        top: '100px',
        left: '50px',
        position: 'absolute'
    }

    const imgStyle = {
        width: '200px',
        height: '200px',
        border: '6px solid orange',
        zIndex: 9
    }

    const btnDivStyle = {
        top: '480px',
        left: '50px',
        position: 'absolute'
    }

    const ftIcon = {
        top: '480px',
        left: '180px',
        position: 'absolute'
    }

    const promptStyle = {
        top: '350px',
        left: '80px',
        position: 'absolute',
        width: '150px',
        height: '50px',
        background: 'lightgray',
        border: '3px solid gray'
    };


    return <Row>
        <Col>
        <Form.Select aria-label="Default select example">
                        <option value="grt">Default</option>
                        <option value="les">Failed</option>
        </Form.Select>
        <div style={phoneStyle}> 
        <div style={widgetCircle}></div>
        <div style={widgetRod}></div>
        <div style={screenStyle}></div>
        <div style={imgDiv}>
            <img src={'http://placekitten.com/196/200'} style={imgStyle}></img>
        </div>
       
        <div style={btnDivStyle}>
            <Button variant="danger">Emergency</Button>
        </div>
        <div style={ftIcon}>
            <FontAwesomeIcon icon={faKeyboard} size="3x" />
        </div>
        </div>
        </Col>
    <Col>
    <Form.Select aria-label="Default select example">
                        <option value="grt">Failed</option>
                        <option value="les">Default</option>
        </Form.Select>
    <div style={phoneStyle}> 
        <div style={widgetCircle}></div>
        <div style={widgetRod}></div>
        <div style={screenStyle}></div>
        <div style={imgDiv}>
            <img src={'http://placekitten.com/196/200'} style={imgStyle}></img>
        </div>
        <div style={promptStyle}>

        </div>
        <div style={btnDivStyle}>
            <Button variant="danger">Emergency</Button>
        </div>
        <div style={ftIcon}>
            <FontAwesomeIcon icon={faKeyboard} size="3x" />
        </div>
        <div style={promptStyle}>
            Unable to detect your face
        </div>
        </div>
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