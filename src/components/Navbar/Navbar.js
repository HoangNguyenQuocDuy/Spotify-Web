import styles from './navbar.module.css'
import clsx from 'clsx'

function Navbar () {
    return (
        <div className = {clsx(styles.nav)}>
            <i class="fa-brands fa-spotify"></i>
            <span> SPOTIFY</span>
        </div>
    )
}

export default Navbar