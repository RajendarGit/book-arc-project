"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import users from "../data/users.json";
import { isAuthenticated } from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/"); // Redirect to home page or any other page if already logged in
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // alert(`Welcome, ${user.firstname} ${user.lastname}!`);
      setErrorMessage(null); // Clear any previous error messages

      // Store user token or information in localStorage or any other method
      localStorage.setItem("userToken", "your_token_here");

      // Redirect to the previous page or to a default page
      router.push("/"); // Redirect to home page or dashboard
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 py-[100px]">
      <h1 className="text-4xl font-normal mb-10 text-black">Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-3 text-grey">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full input-bordered"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-3 text-grey">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input w-full input-bordered"
            required
          />
        </div>

        {errorMessage && <p className="text-error mb-4">{errorMessage}</p>}

        <button type="submit" className="w-full btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
