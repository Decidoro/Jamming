import React from "react";

//This component handles displaying the artist information
const DisplayResults = (props)=>{
    const capName = props.name.toUpperCase();
    const capArtist = props.artist.toUpperCase();
    const capAlbum = props.album.toUpperCase();

    return(
        <div>
            <h1>'{capName}' BY:</h1>
            <h2>{capArtist} - {capAlbum}</h2>
        </div>
    );
  }

//This component call the Display component and passes information into it

function Tracklist(props) {
  const clientId = "473ebfa982454d4b8d85606a7da30ece";
  const clientSecret = "473ebfa982454d4b8d85606a7da30ece";
  const results = [
    {
      name: "On one",
      artist: "Drake",
      album: "Wake",
      id: "0",
    },
    {
      name: "Normal",
      artist: "Feid",
      album: "Wake2",
      id: "1",
    },
    { name: "Cielo", 
    artist: "Rauw", 
    album: "Wake3", 
    id: "3" },
    { name: "Diabla", 
    artist: "Xavi", 
    album: "Wake4", 
    id: "4" },
  ];

  return(
    <div>
    {results.map((track)=>(
        <DisplayResults key={track.id}
            name={track.name}
            artist={track.artist}
            album={track.album}/>
))}
    </div>
  );

  /*
    BASE URL
    https://api.spotify.com.

    curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=473ebfa982454d4b8d85606a7da30ece&client_secret=a3d631001bd047f38fa0f11bd76c60f7"

   API RESPONSE
     {
        "access_token": "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11",
        "token_type": "Bearer",
        "expires_in": 3600
    }
    */

}

export default Tracklist;
