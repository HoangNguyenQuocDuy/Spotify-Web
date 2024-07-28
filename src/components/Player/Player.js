import AudioPlayer from 'react-h5-audio-player';
import clsx from 'clsx'
import { useContext, useState } from 'react'

import '../../index.css'

import 'react-h5-audio-player/lib/styles.css';
import styles from './Player.module.css'

import { Songs } from '../../Context'
// import "react-h5-audio-player/lib/styles.css";

const Player = () => {
    const { dataSongs, song, setSong } = useContext(Songs)

    const handleClickNext = () => {
        // console.log(song.id)
        (song.id === dataSongs.length - 1) ? setSong(dataSongs[0]) : setSong(dataSongs[song.id + 1])
    }

    const handleClickPrev = () => {
        (song.id === 0) ? setSong(dataSongs[dataSongs.length - 1]) : setSong(dataSongs[song.id - 1])
    }

    return (
        <AudioPlayer 
        className = {clsx(styles.rhap_container)}  
        src={song.url} layout="stacked-reverse" 
        showSkipControls={true}
        onClickNext= {handleClickNext}
        onClickPrevious= {handleClickPrev}
        />
    );
} 

export default Player;
