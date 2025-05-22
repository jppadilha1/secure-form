import prisma from "../database/prisma.js";
import { server } from "../server.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export async function createUser() {
  server.post("/create-user", async (req, res) => {
    const { username, email, password } = req.body;
    const saltRounds = 10;

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const verifyName = await prisma.user.findFirst({
      where: { name: username },
    });

    if (verifyName) {
      return res.status(401).send();
    }

    const userCreated = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashPassword,
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const options = {
      from: process.env.EMAIL_ADDRESS,
      to: userCreated.email,
      subject: "Verifique seu e-mail para concluir o cadastro!",
      text: `Para confirmar e fazer login, acesse o link: https://zany-goldfish-jp7p54pv65qhqvp6-3000.app.github.dev/api/confirm-user?token=${userCreated.validation_id}`,
    };

    const info = transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Erro ao enviar o email");
      }
    });

    res.status(201).send("created");
  });
}
