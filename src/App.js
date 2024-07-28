import { useState } from "react";

import GlobalStyles from "./components/GlobalStyle/GlobalStyles.js";
import Navbar from "./components/Navbar/Navbar";
import DetailSong from "./components/DetailSong/DetailSong";
import ListSong from "./components/ListSong/ListSong.js";
import styles from "./components/AppCSS/app.module.css";
import clsx from "clsx";
import { Songs } from "./Context";
import dataSongs from "./data/songs.json";
import Player from "./components/Player/Player";

function App() {
  // const { dataSongs, handleSetSong } = useContext(Songs)
  const [song, setSong] = useState(dataSongs[0]);
  function handleSetSong(id) {
    const song = dataSongs.find((song) => song.id === id);
    setSong(song);
  }

  return (
    <Songs.Provider value={{ dataSongs, handleSetSong, song, setSong }}>
      <GlobalStyles>
        <Navbar />
        <div className={clsx("d-flex", styles.body__app)}>
          <DetailSong />
          <ListSong />
        </div>
        <Player />
      </GlobalStyles>
    </Songs.Provider>
  );
}

export default App;
