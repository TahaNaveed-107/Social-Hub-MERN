import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Authenticate({ children }) {
  const [valid, setValid] = useState(null);

  const router = useRouter();

  const verifyUser = async () => {
    try {
        const response = await fetch ("http://localhost:4004/user/verify", {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
        credentials: "include",
      })
      if (response.ok){
        setValid(true)
      }
        else if(!response.ok && response.status === 404){
          console.log("Unauthorized Access, Redirecting to Login Page...", `${response.status}`)
          setValid(false);
          router.push("/Login");
      }
      console.log("Response: ", response);

    } catch (error) {
      if (response.status === 401){
        console.log("No valid Cookie Found", response.status )
      }
      console.log({
        message : error,
        error: error.message,
      })
      setValid(false);
    }
  }

  useEffect(()=>{
    verifyUser()
  },[])
  
  return valid ? <> {children} </> : null;
}
