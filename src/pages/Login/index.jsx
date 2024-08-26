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
    <div className="h-screen flex items-center justify-center shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setPassword(e.target.value)}
          />
           <p>Esqueceu sua senha?<a className="font-semibold text-purple-950" href=""> Clique aqui.</a></p>
           <p>Ainda não tem conta?<a className="font-semibold text-purple-950" href=""> Clique aqui.</a></p>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </form>
        {error && (
          <p className="mt-4 text-center text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
