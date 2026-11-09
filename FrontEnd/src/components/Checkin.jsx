import styles from './Checkin.module.css'
import { Link } from 'react-router-dom'


const Checkin = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div id={styles.Checkin}>
            <h1>Check In</h1>
            <form onSubmit={handleSubmit} className={styles.checkInForm}>
                <label htmlFor="username">Name:<input type="text" name="username"/></label>
                <label htmlFor="password">Phone Number:<input type="text" name="password"/></label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Checkin;