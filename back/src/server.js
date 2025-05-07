import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";

export const server = Fastify();

server.register(cors);
server.register(routes);

server.get("/", (req, reply) => {
  return reply.status(200).send("Test");
});

server
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP Server is running"))
  .catch((err) => {
    throw new Error(err);
  });
