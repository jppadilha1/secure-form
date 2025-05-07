import { createUser } from "./route/create-user.js";
import { server } from "./server.js";

export async function routes() {
  server.register(createUser);
}
