import { phoneStyle, widgetCircle, widgetRod, screenStyle, imgDiv, btnDivStyle, ftIcon, imgStyle, promptStyle } from "./constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "react-bootstrap";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

export function FailedState(props) {
    return (<div style={phoneStyle}> 
        <div style={widgetCircle}></div>
        <div style={widgetRod}></div>
        <div style={screenStyle}></div>
        <div style={imgDiv}>
            <img src={props.imgSrc} style={imgStyle}></img>
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
        </div>)
}