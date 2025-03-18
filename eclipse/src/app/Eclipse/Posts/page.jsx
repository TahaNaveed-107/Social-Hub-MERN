"use client"
import Menu from "../../../../public/components/Menu/page"
import { useEffect, useState } from "react"

export default function Posts(){
    const [data, setData] = useState(null)
    const fetchPosts = async (req, res) => {
        try {
            const response = await fetch(`http://localhost:4004/post`,{
                method: "GET",
                credentials: "include", // ✅ This sends cookies along with the request
                headers: {
                    "Content-Type": "application/json",
                },
            }) 

            if (!response){
                console.log("No response from the Server")
            }
        } catch (error) {
            
        }
    }    

    useEffect(()=>{
        fetchPosts()
    },[])
    

    return (
        <>
        <h2>This is Posts Page</h2>
        <p>All of your posts are Listed Here</p>
        <Menu/>
        </>
    )
}