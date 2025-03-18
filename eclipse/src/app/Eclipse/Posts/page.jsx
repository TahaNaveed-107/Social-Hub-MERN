// "use client"
// import Menu from "../../../../public/components/Menu/page"
// import { useEffect, useState } from "react"

// export default function Posts(){
//     const [data, setData] = useState([])
//     const fetchPosts = async (req, res) => {
//         try {
//             const response = await fetch(`http://localhost:4004/post`,{
//                 method: "GET",
//                 credentials: "include",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             })
//             const responseData = await response.json();
//             console.log("Response Data ",responseData)
//             setData(responseData)
//             console.log("Data State ",data)

//         } catch (error) {
//             console.log("error" , error)
//         }
//     }    

//     useEffect(()=>{
//         fetchPosts()
//     },[])
    

//     return (
//         <>
//         <h2>This is Posts Page</h2>
//         <p>All of your posts are Listed Here</p>
//         <Menu/>
//         </>
//     )
// }

"use client";
import Menu from "../../../../public/components/Menu/page";
import { useEffect, useState } from "react";

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
                console.error(`Error: ${response.status} - ${response.statusText}`);
                return;
            }

            const responseData = await response.json();
            console.log("Response Data: ", responseData);
            setData(responseData); // ✅ This updates state asynchronously
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // ✅ Log data when it updates
    useEffect(() => {
        console.log("Updated Data State:", data);
    }, [data]);

    return (
        <>
            <h2>This is Posts Page</h2>
            <p>All of your posts are listed here</p>
            <ul>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <li key={index}>{item.caption}</li> // Adjust according to API response
                    ))
                ) : (
                    <p>Loading posts...</p>
                )}
            </ul>
                <Menu />
        </>
    );
}
