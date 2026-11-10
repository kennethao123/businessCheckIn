
import App from './App.jsx'
import ErrorPage from "./components/ErrorPage.jsx"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Checkin from './components/Checkin.jsx'
import Login from './components/Login.jsx'
import Queue from './components/Queue.jsx'

const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/checkin',
                element: <Checkin/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/queue',
                element: <Queue/>
            }
        ]
    }
]

export default routes;