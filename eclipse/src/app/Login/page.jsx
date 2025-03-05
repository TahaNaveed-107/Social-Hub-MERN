"use client";
import { useState } from "react";
import { setToken } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:4004/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("Login Response: ", data);

      if (data.token) {
        dispatch(setToken(data.token));
        console.log("Token stored in redux", data.token);
      }
    } catch (error) {
      console.error("Login Error: ", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);

    userLogin(email, password);
  };
  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <p>
            Email:
            <input
              type="email"
              name="userEmail"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </p>
          <p>
            Password:
            <input
              type="password"
              name="userPassword"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
