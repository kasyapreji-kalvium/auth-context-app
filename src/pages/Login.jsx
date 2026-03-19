import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const success = await login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <input onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
      <input onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
      <button>Login</button>
    </form>
  );
}