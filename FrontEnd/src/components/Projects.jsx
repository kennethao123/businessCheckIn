import styles from './Projects.module.css'
import ProjectCard from './ProjectCard.jsx'

const Projects = () => {
    return (
        <div id="projects">
            <div className={styles.container}>
                <h1>Projects</h1>
                <div className={styles.cardContainer}>
                    <ProjectCard title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <ProjectCard title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <ProjectCard title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <ProjectCard title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <ProjectCard title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <ProjectCard title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <ProjectCard title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />

                </div>
            </div>
        </div>
    )
}

export default Projects;