import api from "./axios.js";
import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;

      form.username.value = "";
      form.email.value = "";
      form.password.value = "";

      const response = await api.post("/create-user", {
        username,
        email,
        password,
      });

      if (response.status == 201) {
        alert("Por favor, verifique seu email na caixa de entrada");
      }
    });
  }, []);

  return (
    <>
      <style>{`
        body {
          background-color: #ccc;
        }

        .form-container {
          padding: 20px;
          background-color: #f5f5f5;
          width: 380px;
          height: 320px;
          margin: 50px auto;
          border-radius: 8px;
          font-family: sans-serif;
        }

        .form-container input {
          width: 92%;
          padding: 8px;
          margin-bottom: 10px;
        }

        .form-container button {
          width: 98%;
          padding: 10px;
          background-color: teal;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .form-container button:hover {
          background-color:rgb(11, 102, 102);
        }

        .form-container h1 {
          text-align: center;
        }
      `}</style>

      <div className="form-container">
        <h1>Cadastro</h1>
        <form id="registerForm">
          <label>Username:</label>
          <input type="text" name="username" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Password:</label>
          <input type="password" name="password" required />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}
