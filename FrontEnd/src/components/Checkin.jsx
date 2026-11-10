import styles from './Checkin.module.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App.jsx'
import { useNavigate } from 'react-router-dom'
const url = import.meta.env.VITE_API_URL;



const Checkin = () => {
    const { jwt, user } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await fetch(`${url}/api/queue/checkin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
              "name" : formData.get("name"),
              "phoneNumber" : formData.get("phoneNumber"),
            }),
        })

        const data = await response.json();
        console.log(data);
        navigate('/queue');

    }

    return (
        <div id={styles.Checkin}>
            <h1>Check In</h1>
            <form onSubmit={handleSubmit} className={styles.checkInForm}>
                <label htmlFor="name">Name:<input type="text" name="name"/></label>
                <label htmlFor="phoneNumber">Phone Number:<input type="text" name="phoneNumber"/></label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Checkin;