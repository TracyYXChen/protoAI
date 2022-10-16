import Table from 'react-bootstrap/Table';
import { PRERUN, AFTERRUN, AUTH } from './constants';

export function Data(props) {
    const inputHeader = ['FaceID_Reg', 'FaceID_Face', 'GT_Label'];
    const inputData = [
        ['http://placekitten.com/195/200', 'http://placekitten.com/196/200', 'False'], 
        ['http://placekitten.com/199/200', 'http://placekitten.com/198/200', 'False'],
        ['http://placekitten.com/200/200', 'http://placekitten.com/200/200', 'True'], 
        ['http://placekitten.com/201/200', 'http://placekitten.com/202/200', 'True'],
        ['http://placekitten.com/203/200', 'http://placekitten.com/204/200', 'False'], 
        ['http://placekitten.com/205/200', 'http://placekitten.com/206/200', 'False']

    ];

    const outputHeader = inputHeader.concat(['score']);
    const scoreCol = [45.5, 71.2, 94.3, 82.0, 32.1, 54.7];
    const outputData = inputData.map((arr, i) => arr.concat([scoreCol[i]]));

    const authHeader = outputHeader.concat(['Authentication']);
    const valCol = ['False', 'True', 'True', 'True', 'False', 'False'];
    const authData = outputData.map((arr, i) => arr.concat([valCol[i]]));


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