import logo from './logo.svg';
import './App.css';
import StackedExample from './components/sideBar';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <StackedExample></StackedExample>
    </div>
  );
}

export default App;
