import logo from './logo.svg';
import './App.css';
import Searchbar from './components/SearchBar';
import Tracklist from './components/Tracklist';

function App() {
  return (
    <div className="App">
      <nav>
        <Searchbar/>
      </nav>
      <body>
        <Tracklist/>
      </body>
    </div>
  );
}

export default App;
