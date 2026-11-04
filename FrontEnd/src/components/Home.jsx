import styles from './Home.module.css'

const Home = () => {

    return (
        <div id={styles.home}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Welcome to my business!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Officia ut esse nihil distinctio commodo soluta laboris ipsum eum occaecat maxime excepteur. Amet at eligendi nulla animi laborum maxime aute.</p>
                    <button>Check In!</button>
                </div>
            </div>
        </div>
    )
}

export default Home;