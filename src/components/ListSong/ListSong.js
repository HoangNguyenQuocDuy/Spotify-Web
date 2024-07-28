import { useContext } from 'react'

import styles from './listSong.module.css'
import clsx from 'clsx'

import { Songs } from '../../Context'

export default function ListSong() {
    const {dataSongs, handleSetSong, song} = useContext(Songs)

    return (
        <div className = {styles.list}>
            <table>
                <thead>
                    <td>#</td>
                    <td>Title</td>
                    <td>Author</td>
                    <td><i class="fa-solid fa-cloud-arrow-down" /></td>
                </thead>
                <tbody>
                    {dataSongs.map((dataSong, idx) => {
                        console.log()
                        return (
                            <tr key = {idx}  onClick = {() => handleSetSong(idx)}
                                className = {idx === song.id && styles.active}
                            >
                                <td>{idx + 1}</td>
                                <td>{dataSong.name}</td>
                                <td>{dataSong.author}</td>
                                <td>
                                    <a href = {dataSong.url} >
                                        <i class={clsx("fa-solid fa-cloud-arrow-down", idx === song.id && styles.active) }/>
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
} 