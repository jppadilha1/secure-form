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

      form.username.value = "";
      form.password.value = "";

      try {
        const response = await api.post("/login", {
          username,
          password,
        });

        if (response.data.token) {
          const jwt = response.data.token;
          const responseProtected = await fetch(
            "https://zany-goldfish-jp7p54pv65qhqvp6-3000.app.github.dev/api/protectedroute",
            {
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            }
          );

          if (responseProtected.status == 200) {
            const responseProtectedBody = await responseProtected.json();

            localStorage.setItem(
              "userPayload",
              JSON.stringify(responseProtectedBody)
            );

            window.location.href = "/home";
          }
        }
      } catch (e) {
        Swal.fire({
          title: "Não foi possível fazer login.",
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
