import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import styles from './App.module.css'
import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
export const AppContext = createContext();

function App() {
    const [ user, setUser ] = useState(() => {
        const savedUser = localStorage.getItem('user')
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [ jwt, setJwt ] = useState(() => localStorage.getItem('jwt'));

  return (
    <div>
        <AppContext value={{user, setUser, jwt, setJwt}}>
            <main className={styles.main}>
                <NavBar/>
                <Outlet />
            </main>

        </AppContext>
    </div>
  )
}

export default App
