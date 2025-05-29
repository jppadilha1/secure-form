import api from "./axios.js";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Register() {
  try {
    const payloadString = localStorage.getItem("userPayload");

    const payload = JSON.parse(payloadString);

    if (payload) {
      window.location.href = "/home";
      return;
    }
  } catch (e) {
    console.log(e);
  }

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

      try {
        const response = await api.post("/create-user", {
          username,
          email,
          password,
        });

        if (response.status == 201) {
          Swal.fire({
            title: "Sign Up Successful!",
            text: "Please check your email inbox.",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#58bc82",
            animation: true,
          });
        }
      } catch (e) {
        Swal.fire({
          title: "Unable to sign up.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "rgb(100, 2, 2)",
          animation: true,
        });
        console.error(e);
      }
    });
  }, []);

  return (
    <>
      <style>{`
    body {
      background-color: #212121;
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }

    .form-container {
      color: #58bc82;
      padding: 20px;
      background-color: #212121;
      width: 380px;
      height: auto;
      margin: 50px auto;
      border-radius: 8px;
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
      margin-top: 10px;
    }

    .form-container button:hover {
      background-color: #58bc82;
    }

    .form-container h1 {
      text-align: center;
    }

    .login-link {
      display: block;
      text-align: right;
      margin-top: 10px;
      font-size: 0.85rem;
      color: #58bc82;
      text-decoration: none;
    }

    .login-link:hover {
      text-decoration: underline;
    }
  `}</style>

      <div className="form-container">
        <h1>Sign Up</h1>
        <form id="registerForm">
          <label>Username:</label>
          <input type="text" name="username" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Password:</label>
          <input type="password" name="password" required />

          <button type="submit">Create Account</button>

          <a href="/login" className="login-link">
            Already have an account?
          </a>
        </form>
      </div>
    </>
  );
}
