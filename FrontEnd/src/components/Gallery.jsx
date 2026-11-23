import styles from './Gallery.module.css'
import GalleryCard from './GalleryCard.jsx'

import hair1 from '../assets/hair1.jpg'
import hair2 from '../assets/hair2.jpg'
import cake1 from '../assets/cake1.jpg'
import cake2 from '../assets/cake2.jpg'
import cake3 from '../assets/cake3.jpg'


const Gallery = () => {
    return (
        <div id="projects">
            <div className={styles.container}>
                <h1>Gallery</h1>
                <div className={styles.cardContainer}>
                    <GalleryCard title={''} imageUrl={hair1} projectText={'hair1'} />
                    <GalleryCard title={''} imageUrl={cake1} projectText={'cake1'} />
                    <GalleryCard title={''} imageUrl={hair2} projectText={'hair2'} />
                    <GalleryCard title={''} imageUrl={cake2} projectText={'cake2'} />
                    <GalleryCard title={''} imageUrl={cake3} projectText={'cake3'} />

                </div>
            </div>
        </div>
    )
}

export default Gallery;