import logo from './logo.svg';
import './App.css';
import Hooks from './components/Hooks';
import HooksCounter2 from './components/HooksCounter2';
import HooksForm from './components/HooksForm';
import CounterUseEffect from './components/CounterUseEffect';

function App() {
  return (
    <div className="App">
      <CounterUseEffect />
      {/*<HooksForm />*/}
    </div>
  );
}

export default App;
// Call Hooks.js and HooksCounter2.js if you want to see those 2 components