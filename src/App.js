import logo from './logo.svg';
import './App.css';
import SecondsCounter from './components/SecondsCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <SecondsCounter/>
      </header>
    </div>
  );
}

export default App;
