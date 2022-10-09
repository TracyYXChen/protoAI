import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import styles from './sideBar.module.css';
import Nav from 'react-bootstrap/Nav';

//const element = <FontAwesomeIcon icon="fa-thin fa-microchip-ai" />

const model = <FontAwesomeIcon icon={faCircleNodes} size="4x" className={styles.lightColor}/>
const database = <FontAwesomeIcon icon={faDatabase} size="4x"  className={styles.lightColor}/>
const phone = <FontAwesomeIcon icon={faMobileScreen} size="4x" className={styles.lightColor}/>
const people = <FontAwesomeIcon icon={faUserGroup} size='3x'className={styles.lightColor}/>

export function SideBar() {
    //return <div>side bars {model} {databse} {phone} {people}</div>
    return (
        <Nav defaultActiveKey="/home" className={styles.flexColumn}>
          <Nav.Link href="/home" className={styles.navPadding}>{model} <span className={styles.paddedText}>Model</span></Nav.Link>
          <Nav.Link eventKey="link-1" className={styles.navPadding}>{database} <span className={styles.paddedText}>Data</span></Nav.Link>
          <Nav.Link eventKey="link-2" className={styles.navPadding}>{phone} <span className={styles.paddedText}>UI</span></Nav.Link>
          <Nav.Link eventKey="disabled" className={styles.navPadding}>{people} <span className={styles.paddedText}>Data Previews</span></Nav.Link>
        </Nav>
      );
}

export default SideBar;


