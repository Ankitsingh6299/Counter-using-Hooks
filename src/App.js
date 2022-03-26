import logo from './logo.svg';
import './App.css';
import Hooks from './components/Hooks';
import HooksCounter2 from './components/HooksCounter2';
import HooksForm from './components/HooksForm';
import CounterUseEffect from './components/CounterUseEffect';
import MousePosition from './components/MousePosition';

function App() {
  return (
    <div className="App">
      {/*<CounterUseEffect />*}
      {/*<HooksForm />*/}
      <MousePosition />
    </div>
  );
}

export default App;
// Call Hooks.js and HooksCounter2.js if you want to see those 2 components