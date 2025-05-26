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

  console.log(user);

  return (
    <>
      <style>{`
      body {
          background-color: #212121;
          color: #fff;
          margin: 30px;
        } 
      `}</style>

      <h1>
        Seja bem-vindo, <span style={{ color: "#58bc82" }}>{user.name}</span>! É
        uma honra recebê-lo no meu projeto prático.
      </h1>
    </>
  );
}
