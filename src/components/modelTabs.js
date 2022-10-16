import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FaceIDCard } from './faceIDcard';
import styles from './sideBar.module.css';
import { Transformations } from './transformations';

export function ModelTabs(props) {

    return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="model">
        <Row>
            
                <Nav variant="pills" className={`${styles.navPadding}`} activeKey="/model">
                <Nav.Item>
                    <Nav.Link eventKey="model"> <p>Model config</p>  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="transformations"> <p>Transformations</p> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="csv"> <p>Upload CSV</p> </Nav.Link>
                </Nav.Item>
                </Nav>
            
            
                <Tab.Content>
                <Tab.Pane eventKey="model">
                    <FaceIDCard clickRun={props.clickRun} ></FaceIDCard>
                </Tab.Pane>
                <Tab.Pane eventKey="transformations">
                    <Transformations clickAuth={props.clickAuth}></Transformations>
                </Tab.Pane>
                <Tab.Pane eventKey="csv">
                </Tab.Pane>
                </Tab.Content>
            
        </Row>
    </Tab.Container>)
}