"use client"
import Menu from "../../../../public/components/Menu/page"
import { useEffect } from "react"
import Authenticate from "../../../../public/components/Authentication/page"

export default function Posts(){
    const fetchPosts = async (req, res) => {
        try {
            const response = await fetch(`http://localhost:4004/user`,{
                method: "GET"
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
        <Authenticate>

        <h2>This is Profile Page</h2>
        <p>All of your information Appears here</p>
        <Menu/>
        </Authenticate>
    )
}