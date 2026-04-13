import React, { useState } from "react";
import { signup, login, getProfile } from "./api";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await signup(form.name, form.email, form.password);
    setMessage(data.message || data.error || "Signup completed");
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await login(form.email, form.password);
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setMessage("Login successful");
    } else {
      setMessage(data.message || "Login failed");
    }
    setLoading(false);
  };

  const loadProfile = async () => {
    setLoading(true);
    const data = await getProfile(token);
    setProfile(data.user || data);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setProfile(null);
    setMessage("Logged out");
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Connect the Stack</h1>
        <p>React frontend connected to Node.js backend APIs</p>

        {!token ? (
          <>
            <div className="tabs">
              <button onClick={() => setMode("login")} className={mode === "login" ? "active" : ""}>Login</button>
              <button onClick={() => setMode("signup")} className={mode === "signup" ? "active" : ""}>Signup</button>
            </div>

            <form onSubmit={mode === "login" ? handleLogin : handleSignup}>
              {mode === "signup" && (
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
              )}
              <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
              <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
              <button type="submit">{loading ? "Please wait..." : mode === "login" ? "Login" : "Signup"}</button>
            </form>
          </>
        ) : (
          <>
            <button onClick={loadProfile}>Load Protected Profile</button>
            <button onClick={logout} className="secondary">Logout</button>
          </>
        )}

        {message && <p className="message">{message}</p>}

        {profile && (
          <pre className="profile">{JSON.stringify(profile, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}
