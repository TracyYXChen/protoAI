import Table from 'react-bootstrap/Table';
import { PRERUN, AFTERRUN, AUTH, inputHeader, outputHeader, authHeader, inputData, outputData, authData } from './constants';

export function Data(props) {
    function pickTableHeader() {
        let header;
        if(props.modelRan === PRERUN) {
            header = inputHeader;
        }
        else if(props.modelRan === AFTERRUN) {
            header = outputHeader
        }
        else if(props.modelRan === AUTH) {
            header = authHeader;
        }
        return header.map(hd => <th>{hd}</th>);
    }

    function pickData() {
        let dataDom;
        if(props.modelRan === PRERUN) {
            dataDom = inputData;
        }
        else if(props.modelRan === AFTERRUN) {
            dataDom = outputData;
        }
        else if(props.modelRan === AUTH) {
            dataDom = authData;
        }

        return dataDom.map(arr => <tr><td><img src={arr[0]} alt='cat'></img></td><td><img src={arr[1]} alt='cat'></img></td>{arr.slice(2).map(item =><td>{item}</td>)}</tr>);
    }

    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              {pickTableHeader()}
            </tr>
          </thead>
          <tbody>
            {pickData()}
          </tbody>
        </Table>
      );
}