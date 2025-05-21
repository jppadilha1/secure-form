import { server } from "./../server.js";
import prisma from "./../database/prisma.js";
import bcrypt from "bcrypt";

export function loginUser() {
  server.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { name: username },
    });

    await bcrypt.compare(password, user.password).then((result) => {
      const verify = result;

      if (verify == true) {
        return res.status(200).send("Existe esse usuário");
      }
    });

    return res.status(400).send("Não Existe esse usuário");
  });
}
