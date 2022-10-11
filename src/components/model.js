import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { modelCard, activeCardStyle, defaultCardStyle} from './styles';
import { useState } from 'react';

export function Model() {
    const [activeCard, setActiveCard] = useState('');

    function pickStyle(curCardID) {
        return curCardID === activeCard? activeCardStyle : defaultCardStyle;
    }

    function changeActive(curCardID) {
        if(curCardID === activeCard) {
            setActiveCard('');
        }
        else {
            setActiveCard(curCardID);
        }
    }

    return <Row>
         <Card id='imgCard' style={pickStyle('imgCard')}>
            <Card.Img variant="top" src="./images/imageClassification.jpg"  style={modelCard}/>
            <Card.Body>
            <Card.Title>Image Classification</Card.Title>
            <Button variant="primary" onClick={(e) => changeActive('imgCard')}>Select</Button>
            </Card.Body>
        </Card>
        <Card id='qualityCard' style={pickStyle('qualityCard')}>
            <Card.Img variant="top" src="./images/imageQuality.jpg" style={modelCard}/>
            <Card.Body>
            <Card.Title>Image Quality</Card.Title>
            <Button variant="primary" onClick={(e) => changeActive('qualityCard')}>Select</Button>
            </Card.Body>
        </Card>
        <Card id='faceCard' style={pickStyle('faceCard')}>
            <Card.Img variant="top" src="./images/faceIdentification.jpg" style={modelCard}/>
            <Card.Body>
            <Card.Title>Face Identification</Card.Title>
            <Button variant="primary" onClick={(e) => changeActive('faceCard')}>Select</Button>
            </Card.Body>
        </Card>
    </Row>

}