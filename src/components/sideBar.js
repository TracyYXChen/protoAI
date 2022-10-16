import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import styles from './sideBar.module.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Model } from './model';
import { Data } from './data'
import { ModelTabs } from './modelTabs';
import { UI } from './ui'
import { DataPreview } from './dataPreview'

//const element = <FontAwesomeIcon icon="fa-thin fa-microchip-ai" />

const model = <FontAwesomeIcon icon={faCircleNodes} size="4x" className={styles.lightColor}/>
const database = <FontAwesomeIcon icon={faDatabase} size="4x"  className={styles.lightColor}/>
const phone = <FontAwesomeIcon icon={faMobileScreen} size="4x" className={styles.lightColor}/>
const people = <FontAwesomeIcon icon={faUserGroup} size='3x'className={styles.lightColor}/>

export function SideBar(props) {
    //return <div>side bars {model} {databse} {phone} {people}</div>
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="model">
        <Row>
        <Col sm={1}>
            <Nav variant="pills" className={`flex-column ${styles.navPadding}`} activeKey="/model">
            <Nav.Item>
                <Nav.Link eventKey="model">{model} <p>Model</p>  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="data">{database} <p>Data</p> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="ui">{phone} <p>UI</p> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="dataPreview">{people} <p>Data Preview</p></Nav.Link>
            </Nav.Item>
            </Nav>
        </Col>
        <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="model">
                <Model></Model>
            </Tab.Pane>
            <Tab.Pane eventKey="data">
                <Row>
                    <Col xs={8}>
                    <Data modelRan={props.modelRan}></Data>
                    </Col>
                    <Col xs={4}>
                    <ModelTabs clickRun={props.clickRun} clickAuth={props.clickAuth} ></ModelTabs>
                    </Col>
                </Row>
                
            </Tab.Pane>
            <Tab.Pane eventKey="ui">
                 <UI></UI>
            </Tab.Pane>
            <Tab.Pane eventKey="dataPreview">
                 <DataPreview></DataPreview>
            </Tab.Pane>
            </Tab.Content>
        </Col>
        </Row>
        </Tab.Container>
      );
}

export default SideBar;


