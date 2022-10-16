export const PRERUN = 'preRun';
export const AFTERRUN = 'afterRun';
export const AUTH = 'authenticated';
export const inputHeader = ['FaceID_Reg', 'FaceID_Face', 'GT_Label'];
export const inputData = [
        ['http://placekitten.com/195/200', 'http://placekitten.com/196/200', 'False'], 
        ['http://placekitten.com/199/200', 'http://placekitten.com/198/200', 'False'],
        ['http://placekitten.com/200/200', 'http://placekitten.com/200/200', 'True'], 
        ['http://placekitten.com/201/200', 'http://placekitten.com/202/200', 'True'],
        ['http://placekitten.com/203/200', 'http://placekitten.com/204/200', 'False'], 
        ['http://placekitten.com/205/200', 'http://placekitten.com/206/200', 'False']

    ];

export const outputHeader = inputHeader.concat(['score']);
export const scoreCol = [45.5, 71.2, 94.3, 82.0, 32.1, 54.7];
export const outputData = inputData.map((arr, i) => arr.concat([scoreCol[i]]));

export const authHeader = outputHeader.concat(['predicted']);
export const valCol = ['False', 'True', 'True', 'True', 'False', 'False'];
export const authData = outputData.map((arr, i) => arr.concat([valCol[i]]));
export const phoneStyle = {
    width: '300px',
    height: '600px',
    margin: '40px',
    border: '2px solid gray',
    borderRadius: '40px',
    position: 'relative'
};

export const screenStyle = {
    width: '270px',
    height: '540px',
    
    border: '2px solid gray',
    borderRadius: '30px',
    position: 'absolute',
    top: '40px',
    left: '15px'
}

export const widgetCircle = {
    width: '20px',
    height: '20px',
    border: '2px solid gray',
    borderRadius: '10px',
    position: 'absolute',
    top: '10px',
    left: '80px'
}

export const widgetRod = {
    width: '80px',
    height: '10px',
    border: '2px solid gray',
    borderRadius: '10px',
    position: 'absolute',
    top: '15px',
    left: '120px'
}

export const imgDiv = {
    top: '100px',
    left: '50px',
    position: 'absolute'
}

export const imgStyle = {
    width: '200px',
    height: '200px',
    border: '6px solid orange',
    zIndex: 9
}

export const btnDivStyle = {
    top: '480px',
    left: '50px',
    position: 'absolute'
}

export const ftIcon = {
    top: '480px',
    left: '180px',
    position: 'absolute'
}

export const promptStyle = {
    top: '350px',
    left: '80px',
    position: 'absolute',
    width: '150px',
    height: '50px',
    background: 'lightgray',
    border: '3px solid gray'
};