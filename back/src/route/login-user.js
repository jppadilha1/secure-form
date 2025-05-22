import { server } from "./../server.js";
import prisma from "./../database/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function loginUser() {
  server.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { name: username },
    });

    await bcrypt.compare(password, user.password).then((result) => {
      const verify = result;

      if (verify) {
        const token = jwt.sign(
          { id: user.id, name: user.name },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        return res.status(200).send({ msg: "Valid Credentials", token: token });
      }
    });

    return res.status(400).send("Invalid Credentials");
  });
}
