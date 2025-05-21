import { createUser } from "./route/create-user.js";
import { server } from "./server.js";
import { confirmUser } from "./route/confirm-user.js";
import { loginUser } from "./route/login-user.js";

export async function routes() {
  server.register(createUser);
  server.register(confirmUser);
  server.register(loginUser);
}
