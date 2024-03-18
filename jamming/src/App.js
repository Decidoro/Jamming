import logo from './logo.svg';
import './App.css';
import Searchbar from './components/SearchBar';
import Tracklist from './components/Tracklist';

function App() {
  return (
    <div className="App">
      <nav>
        <Searchbar id='searchbar'/>
      </nav>
      <body>
        <Tracklist id='tracklist'/>
      </body>
    </div>
  );
}

export default App;
