"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Authenticate({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      console.log("Authentication Failed, Login Again...");
      router.push("/Login");
    }
    router.push("/DashBoard");
  }, [token]);

  return <>{children}</>;
}
