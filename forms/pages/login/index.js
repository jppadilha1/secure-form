import api from "../axios.js";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Login() {
  useEffect(() => {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const username = form.username.value;
      const password = form.password.value;
      console.log(username, email);

      form.username.value = "";
      form.password.value = "";
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
        <h1>Login</h1>
        <form id="loginForm">
          <label>Username:</label>
          <input type="text" name="username" required />

          <label>Password:</label>
          <input type="password" name="password" required />

          <button type="submit">Enter</button>
        </form>
      </div>
    </>
  );
}
