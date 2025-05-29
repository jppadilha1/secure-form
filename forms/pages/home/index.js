import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    const payloadString = localStorage.getItem("userPayload");
    const payload = JSON.parse(payloadString);
    setUser(payload);
  }, []);

  if (!user) {
    return <p>...</p>;
  }

  return (
    <>
      <style>{`
    body {
      background-color: #212121;
      color: #fff;
      margin: 30px;
      font-family: sans-serif;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px; 
    }

    h1 {
      font-size: 2rem;
      margin: 0;
    }

    .logout {
      color: #58bc82;
      cursor: pointer;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
    }

    .logout:hover {
      text-decoration: underline;
    }

  
    @media (max-width: 600px) {
      .header-container {
        flex-direction: column;
        align-items: flex-start; 
      }

      h1 {
        font-size: 1.2rem;
      }

      .logout {
        font-size: 0.9rem;
      }
    }
  `}</style>

      <div className="header-container">
        <h1>
          Welcome, <span style={{ color: "#58bc82" }}>{user.name}</span>! It's a
          pleasure to have you in my practical project.
        </h1>

        <span
          className="logout"
          onClick={() => {
            localStorage.removeItem("userPayload");
            window.location.href = "/login";
          }}
        >
          Logout
        </span>
      </div>
    </>
  );
}
