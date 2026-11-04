import styles from './Contact.module.css'
import cardStyles from './Card.module.css'

const Contact = () => {
    return (
        <div id="contact">
            <div className={styles.container}>
                <h1>Contact</h1>
                <hr/>
                <div className={styles.cardDiv}>
                    <div className={cardStyles.card}>
                        <h3>Phone</h3>
                        <h3>(510) 508-7381</h3>
                    </div>

                    <div className={cardStyles.card}>
                        <h3>Email</h3>
                        <h3>kennethao123@gmail.com</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;