"use client";
import Menu from "../../../public/components/Menu/[userID]/page";
import { useState, useEffect } from "react";
import Authenticate from "../../../public/components/Authentication/page";
export default function Eclipse() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName && storedName !== name) {
      setName(storedName);
    }
  }, []);

  const clearCredentials = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {}, [token]);

  return (
    <Authenticate>
      <div>
        <h2>Welcome {name ? name : "User"}</h2>
        <p>Welcome to Eclipse page</p>

        <button type="button" onClick={clearCredentials}>
          Clear Credentials
        </button>
      </div>
      <Menu />
    </Authenticate>
  );
}
