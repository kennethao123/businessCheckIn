import styles from './GalleryCard.module.css'


const GalleryCard = ({title, imageUrl, projectText}) => {


    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}><img src={imageUrl} alt={imageUrl}/></div>

            <div className={styles.textContent}>
                <p>{title}</p>
                <p>
                    {projectText}
                </p>
            </div>
        </div>
    )
}

export default GalleryCard;