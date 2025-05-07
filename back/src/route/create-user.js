import prisma from "../database/prisma.js";
import { server } from "../server.js";

export async function createUser() {
  server.post("/create-user", (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    res.status(201).send("created");
  });
}
