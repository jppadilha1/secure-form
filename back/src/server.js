import Fastify from "fastify";
import cors from "@fastify/cors";

export const server = Fastify();

server.register(cors);

server.get("/", (req, reply) => {
  return reply.status(200).send("Test");
});

server.listen(
  {
    port: 3333,
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
