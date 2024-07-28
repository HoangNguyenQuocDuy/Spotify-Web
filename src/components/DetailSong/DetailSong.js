import { useContext } from "react";

import styles from "./detailSong.module.css";
import clsx from "clsx";
import { Songs } from '../../Context.js'

export default function DetailSong() {
  const { song } = useContext(Songs)

  return (
    <div className={clsx(styles.detail)}>
      <h3>Now playing</h3>
      <h2>{song.name}</h2>
      <div className={clsx(styles.main__pic)}>
        <img
          src={song.links.images[0].url}
          alt="picSong"
        ></img>
      </div>
      <div className = {clsx('d-flex', styles.footer)}>
        <div className={clsx(styles.sub__pic)}>
          <img src={song.links.images[1].url} alt="picSinger"></img>
        </div>
        <div className =  {styles.name__singer}>{song.author}</div>
      </div>
    </div>
  );
}
