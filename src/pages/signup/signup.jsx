import React, { useState } from "react";


import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../firebase.config';
import Login from "./login";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        firstName,
        lastName,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  return (
    <div>
      <form className="signupForm" onSubmit={handleSubmit}>
        <input  className="input-refubookGray hover:text-refubookActiveNav font-medium"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <button type= "button">Sign Up</button>
        <button type= "button"> <Login>
        Login</Login>Login</button>
      </form>
    </div>
  );
};

export default Signup;
