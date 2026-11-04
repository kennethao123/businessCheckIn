import styles from './Card.module.css'


const ProjectCard = ({title, imageUrl, projectText}) => {


    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={imageUrl}/>
            <p>{title}</p>
            <div className={styles.textContent}>
                <p>
                    {projectText}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;