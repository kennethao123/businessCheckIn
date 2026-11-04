import styles from './Card.module.css'

const ServicesCard = ({logo, title, content}) => {

    return (
        <div className={styles.card}>
            <img src={logo} alt="logo"/>
            <h2>{title}</h2>
            <hr/>
            <p>{content}</p>
        </div>
    )
}

export default ServicesCard;