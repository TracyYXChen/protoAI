import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FaceIDCard } from './faceIDcard';
import styles from './sideBar.module.css';

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
                    <FaceIDCard updateRunStatus={props.updateRunStatus} modelRan={props.modelRan}></FaceIDCard>
                </Tab.Pane>
                <Tab.Pane eventKey="transformations">
                </Tab.Pane>
                <Tab.Pane eventKey="csv">
                </Tab.Pane>
                </Tab.Content>
            
        </Row>
    </Tab.Container>)
}