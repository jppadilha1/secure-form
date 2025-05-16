import { createUser } from "./route/create-user.js";
import { server } from "./server.js";
import { confirmUser } from "./route/confirm-user.js";

export async function routes() {
  server.register(createUser);
  server.register(confirmUser);
}
