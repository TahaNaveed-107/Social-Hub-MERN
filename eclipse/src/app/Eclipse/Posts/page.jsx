"use client";
import Menu from "../../../../public/components/Menu/page";
import styles from "./post.module.css"
import { useEffect, useState } from "react";
import Authenticate from "../../../../public/components/Authentication/page";

export default function Posts() {
    const [data, setData] = useState([]); // Default empty array to avoid errors

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:4004/post", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.log(`Error: ${response.status} - ${response.statusText}`);
                return;
            }

            const responseData = await response.json();
            console.log("Response Data: ", responseData);
            setData(responseData); 
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        console.log("Updated Data State:", data);
    }, [data]);

    return (
        <Authenticate>
        <div className={styles.header}>
            <h2>This is Posts Page</h2>
            <p>All of your posts are listed here</p>
        </div>
                <div className={styles.gridContainer} >
                {data.length > 0 ? (
                    data.map((item) => (
                        <div className={styles.imgContainer} key={item._id}>
                        {/* <p>{item.caption}</p> */}
                        <div className={styles.imgOverlay}>
                            <img src={null} className={styles.icon} alt="Likes" />
                            <img src={null} className={styles.icon} alt="Comments" />
                        </div>
                        <img className={styles.post}  src={item.url} alt={item.caption} />
                    </div>
                    ))
                ) : (
                    <p>Loading posts...</p>
                )}
                </div>
                <Menu />
        </Authenticate>
    );
}
