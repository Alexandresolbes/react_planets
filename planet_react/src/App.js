import './App.css';
import About from './about';
import Navbar from './navbar';
import planets from './planets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <About />
        <planets />
      </header>
    </div>
  );
}

export default App;
