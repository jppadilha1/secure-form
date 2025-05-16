import { server } from "../server.js";
import prisma from "../database/prisma.js";

export async function confirmUser() {
  server.get("/confirm-user", async (req, res) => {
    const validationId = req.query.token;
    if (!validationId) {
      return res.status(401).send("Token Inválido");
    }

    try {
      const user = await prisma.user.update({
        where: { validation_id: validationId },
        data: {
          validation_id: "",
          checked: new Date(),
        },
      });

      return res.status(200).send("Email confirmado com sucesso!");
    } catch (err) {
      if (err) {
        return res.status(401).send("Erro de validação");
      }
    }
  });
}
