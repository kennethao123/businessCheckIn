import styles from './Contact.module.css'
import cardStyles from './Card.module.css'
const igUrl = 'https://www.instagram.com/'
const tiktokUrl = 'https://www.tiktok.com/'
import igIcon from '../assets/instagram.png'
import tiktokIcon from '../assets/tik-tok.png'

const Contact = () => {

    const newTab = (url) => {
        window.open(url, "_blank", 'noopener,noreferrer')
    }

    return (
        <div id="contact">
            <div className={styles.container}>
                <h1>Contact</h1>
                <hr/>
                <div className={styles.cardDiv}>
                    <div className={cardStyles.card}>
                        <h3>Phone</h3>
                        <h3>#######</h3>
                    </div>

                    <div className={cardStyles.card}>
                        <h3>Email</h3>
                        <h3>email@email.com</h3>
                    </div>

                    <div className={cardStyles.card}>
                        <h3>Social Media</h3>
                        <div className={styles.card}>
                            <div className={styles.buttonsDiv}>
                                <button onClick={ () => newTab(igUrl) }><img className={styles.icon} src={igIcon} alt="ig"/></button>
                                <button onClick={ () => newTab(tiktokUrl) }><img className={styles.icon} src={tiktokIcon} alt="tiktok"/></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;