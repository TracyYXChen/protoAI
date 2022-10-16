import { outputData } from './constants';
import { DefaultState } from './defaultState';
import { FailedState } from './failedState';
import Row from 'react-bootstrap/Row';

const hardCodeThre = 50;

export function DataPreview() {
    return <Row>
        {outputData.map(item => pickState(item))}
    </Row>

}

function pickState(item) {
    if(item[3] > hardCodeThre) {
        return <DefaultState imgSrc={item[1]}></DefaultState>
    }
    else {
        return <FailedState imgSrc={item[1]}></FailedState>
    }
}