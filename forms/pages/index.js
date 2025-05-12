import api from "./axios.js";
import { useEffect } from "react";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: "Cadastro Realizado com Sucesso!",
          text: "Verifique seu email na caixa de entrada.",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: " #58bc82",
          animation: true,
        });
      }
    });
  }, []);

  return (
    <>
      <style>{`
        body {
          background-color: #212121;
        }

        .form-container {
          color: #58bc82;
          padding: 20px;
          background-color: #212121;
          width: 380px;
          height: 320px;
          margin: 50px auto;
          border-radius: 8px;
          font-family: sans-serif;
        }

        .form-container input {
          width: 92%;
          padding: 14px;
          margin-bottom: 10px;
          margin-top: 6px;
          border-radius: 8px;
          background-color: #efefef;
        }

        .form-container button {
          width: 100%;
          padding: 14px;
          background-color: #707070;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          margin-top:10px;
        }
        
        .form-container button:hover {
          background-color: #58bc82;
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
