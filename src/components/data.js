import Table from 'react-bootstrap/Table';

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

    const outputHeader = ['FaceID_Reg', 'FaceID_Face', 'GT_Label', 'score', 'Authentication'];
    const outputData = [
        ['http://placekitten.com/195/200', 'http://placekitten.com/196/200', 'False', 45.5, 'False'], 
        ['http://placekitten.com/199/200', 'http://placekitten.com/198/200', 'True', 71.2, 'True'],
        ['http://placekitten.com/200/200', 'http://placekitten.com/200/200', 'True', 94.3, 'True'], 
        ['http://placekitten.com/201/200', 'http://placekitten.com/202/200', 'True', 82.0, 'True'],
        ['http://placekitten.com/203/200', 'http://placekitten.com/204/200', 'False', 32.1, 'False'], 
        ['http://placekitten.com/205/200', 'http://placekitten.com/206/200', 'False', 54.7, 'False']
    ];

    function pickTableHeader() {
        let header = props.modelRan? outputHeader: inputHeader;
        return header.map(hd => <th>{hd}</th>);
    }

    function pickData() {
        let dataDom = props.modelRan? outputData: inputData;
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