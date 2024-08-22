import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    await api
      .post("/accounts/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.token);
        navigate("/home");
      })
      .catch((err) => {
        if (!err?.response) {
          setError("Erro ao acessar o servidor");
        } else if (err.response.status === 401) {
          setError("Usuário ou senha inválidos");
        }
      });
  };

  return (
    <div className="login-form-wrap">
      <div>
        <h2>Login</h2>
        <form className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn-login"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default Login;
