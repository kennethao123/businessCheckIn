import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div id={styles.navigation}>
            <div className={styles.container}>
                <nav className={styles.navbarMenu}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default NavBar;