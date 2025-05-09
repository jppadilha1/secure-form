import prisma from "../database/prisma.js";
import { server } from "../server.js";
import bcrypt from "bcrypt";

export async function createUser() {
  server.post("/create-user", async (req, res) => {
    const { username, email, password } = req.body;
    const saltRounds = 10;

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const userCreated = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashPassword,
      },
    });

    res.status(201).send("created");
  });
}
