import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../App.jsx'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const { jwt, setJwt, user, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    //user logs out
    const logout = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')

        setJwt(null);
        setUser(null);

        navigate('/')
    }

    return (
        <div id={styles.navigation}>
            <div className={`${styles.container} ${styles.navbarLinks}`}>
                <Link to={'/'}><img src="" alt="logo"/></Link>

                <nav className={styles.navbarMenu}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/queue'>Queue</Link></li>
                        {user && (
                            <li><Link to='/' onClick={logout}>Logout</Link></li>
                        )}
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default NavBar;