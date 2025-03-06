"use client";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName && storedName !== name) {
      setName(storedName);
    }
  }, []);

  return (
    <>
      <div>
        <h2>Welcome {name ? name : "User"}</h2>
        <p>Welcome to Dashboard page</p>
      </div>
    </>
  );
}
