import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let userRole = "";

    if (username === "admin" && password === "admin123") {
      userRole = "admin";
    } else if (username === "counsellor" && password === "counsellor123") {
      userRole = "counsellor";
    } else if (username === "victim" && password === "victim123") {
      userRole = "victim";
    } else {
      setError("Invalid username or password");
      return;
    }

    // ✅ store user
    localStorage.setItem(
      "user",
      JSON.stringify({ username, role: userRole })
    );

    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>SafeSupport Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;