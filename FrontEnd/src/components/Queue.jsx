import styles from './Queue.module.css'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App.jsx'
const url = import.meta.env.VITE_API_URL

const Queue = () => {
    const { jwt, user } = useContext(AppContext);
    const [ queue, setQueue ] = useState([]);

    const formatDate = (date) => {
        return new Date(date).toLocaleString([], {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        })
    }

    const removeClick = (id) => {
        const response = fetch(`${url}/api/queue/deleteCheckin/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${jwt}`,
            }
        })

        if (response.ok) {
            setQueue(prevQueue =>
                prevQueue.filter(checkin => checkin.id !== id));
        }
    }

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

    }, [queue])

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
                                    <p>Phone: {checkIn.phoneNumber}</p>
                                    <p>Joined at: {formatDate(checkIn.createdAt)}</p>
                                    <button onClick={() => removeClick(checkIn.id)}>Remove</button>
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