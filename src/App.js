import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1>
          Alora Riley
        </h1>
      </header>
      <AboutMe/>
    </div>
  );
}

export default App;
