"use client";
import Menu from "../../../../public/components/Menu/page";
import { useState, useEffect } from "react";
import Authenticate from "../../../../public/components/Authentication/page";
export default function Eclipse() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName && storedName !== name) {
      setName(storedName);
    }
  }, []);


  return (
    <Authenticate>
      <div>
        <h2>Welcome {name ? name : "User"}</h2>
        <p>Welcome to Eclipse page</p>
      </div>
      <Menu />
    </Authenticate>
  );
}
