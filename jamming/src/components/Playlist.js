import React from "react";
import Tracklist from "./Tracklist";

function PlaylistDisplay(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.track}</p>
    </div>
  );
}

function Playlist() {
  const trackList = ["Normal", "Cielo"];
  const title = "Chill";

  return (
    <div>
      <ul>
        {trackList.map((track, index) => (
            <li key={index}>{track}</li>
        ))}
      </ul>
    </div>
  );
}
export default Playlist;
