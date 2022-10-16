import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sideBar';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {PRERUN, AFTERRUN, AUTH} from './components/constants';

function App() {
  const [modelRan, updateRunStatus] = useState(PRERUN);

  function clickRun() {
    updateRunStatus(AFTERRUN);
  } 

  function clickAuth() {
    updateRunStatus(AUTH);
  }


  return (
    <div className="App">
      <Header></Header>
      <Sidebar clickRun={clickRun} clickAuth={clickAuth} modelRan={modelRan}></Sidebar>
    </div>
  );
}

export default App;
