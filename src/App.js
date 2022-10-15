import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sideBar';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [modelRan, updateRunStatus] = useState(false);

  

  function clickRun(e) {
    console.log('updated');
    updateRunStatus(true);
  } 


  return (
    <div className="App">
      <Header></Header>
      <Sidebar updateRunStatus={clickRun} modelRan={modelRan}></Sidebar>
    </div>
  );
}

export default App;
