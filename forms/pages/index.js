// pages/register.js

import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;

      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);

      form.username.value = "";
      form.email.value = "";
      form.password.value = "";
    });
  }, []);

  return (
    <>
      <style>{`
        .form-container {
          padding: 20px;
          background-color: #f5f5f5;
          width: 300px;
          margin: 50px auto;
          border-radius: 8px;
          font-family: sans-serif;
        }

        .form-container input {
          width: 90%;
          padding: 8px;
          margin-bottom: 10px;
        }

        .form-container button {
          width: 96%;
          padding: 10px;
          background-color: teal;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
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
