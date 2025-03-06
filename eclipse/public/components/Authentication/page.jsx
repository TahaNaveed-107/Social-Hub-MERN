"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Authenticate({ children }) {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      console.log("Authentication Failed, Redirecting to Login Page");
      //   alert("Login Again?");
      router.push("/Login");
    }
    if (storedToken) {
      setToken(storedToken);
      router.push("/Eclipse");
    }
  }, [token]);

  if (!token) return null;

  return <>{children}</>;
}
