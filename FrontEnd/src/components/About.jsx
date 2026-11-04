import styles from './About.module.css'
import ServicesCard from './ServicesCard.jsx'

const About = () => {
    return (
        <div id="about">
            <h1>About</h1>
            <div className={styles.container}>

                <div className={styles.row}>
                    <img src="" alt="head portrait img"/>
                    <div className={styles.textContent}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <h1>Services</h1>
                <div className={styles.services}>

                    <div className={styles.cardContainer}>
                        <ServicesCard title={'Web Development'} logo={'logo'} content={'Websites and web applications'}/>
                        <ServicesCard title={'Desktop Apps'} logo={'logo'} content={'Desktop applications to get things done'}/>
                        <ServicesCard title={'Small Business Solutions'} logo={'logo'} content={'Technical support'}/>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;