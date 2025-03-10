"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail, setToken, setName } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmailState] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  const userLogin = async (req, res) => {
    try {
      const response = await fetch("http://localhost:4004/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response) {
        console.log("Connection Error");
      }

      const data = await response.json();
      console.log("Login Response: ", data);

      // setting up token in redux state
      // dispatch(setToken(data.token));
      // localStorage.setItem("token", data.token);
      // console.log("Token set for the user as : ", data.token);

      // // setting up email in redux state
      // dispatch(setEmail(data.user.email));
      // console.log("Email set for the user as : ", data.user.email);

      // setting up name in redux state
      dispatch(setName(data.user.name));
      console.log("Name set for the user as : ", data.user.name);
      localStorage.setItem("name", data.user.name);

      // setting up user ID in local storage
      const userID = data.user.id;
      localStorage.setItem("userID", userID);

      router.push(`/Eclipse/${userID}`);
    } catch (error) {
      console.error("Login Error: ", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
    userLogin();
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
                setEmailState(e.target.value);
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
