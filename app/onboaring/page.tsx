"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await signIn("email", {
        email,
        redirect: false, // we'll control redirect
        callbackUrl: "/", // where to go after login
      });

      if (!res?.error) {
        setMessage("Check your email for the login link.");
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error sending login email.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#2D2828]">
      <img src="btc-overlay.png" className="w-[40vw] h-[80vh] absolute opacity-30 top-[20px] mix-blend-color-dodge" alt="btc-overlay" />
      <h1>Sign in with Email</h1>
      <form onSubmit={handleLogin} className="isolate">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#FF5400",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Sending..." : "Sign In"}
        </button>
      </form>
      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}
