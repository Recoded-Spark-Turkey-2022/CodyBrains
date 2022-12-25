import React, { useState } from "react";

import { signInWithEmailAndPassword, signInWithGoogle} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "./firebase.config";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/");
    }
    onRegister();
  };


  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  type='button'>Login</button>
        <button
            onClick={signInWithGoogle}
            className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
          <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
      </form>
    </div>
  );
};

export default Login;