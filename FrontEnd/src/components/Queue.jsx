import styles from './Queue.module.css'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App.jsx'
const url = import.meta.env.VITE_API_URL

const Queue = () => {
    const { jwt, user } = useContext(AppContext);
    const [ queue, setQueue ] = useState([]);

    useEffect( () => {
        const getQueue = async () => {
            const response = await fetch(`${url}/api/queue/getQueue`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setQueue(data);
        }
        getQueue();

    }, [])

    return (
        <div id={styles.queue}>
            <h1>Queue</h1>
            <div className={styles.container}>
                {queue && (
                    queue.map((checkIn, index) => (
                        <div className={styles.card}>
                            <h3>{index + 1} : {checkIn.name}</h3>

                            {/*if logged in, user can see phone number or remove from queue*/}
                            {user && (
                                <div className={styles.authenticated}>
                                    <h3>{checkIn.phoneNumber}</h3>
                                    <button>remove</button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    )

}

export default Queue;