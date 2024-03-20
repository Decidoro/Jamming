import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="App">
      <nav>
        <Searchbar id="searchbar" />
      </nav>
      <body>
        <div>
          <Tracklist id="tracklist" />
        </div>
        <div>
          <Playlist id='Playlist'/>
        </div>
      </body>
    </div>
  );
}

export default App;
