import jwt from "jsonwebtoken";

export default async function protectedRoute(req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Unprotected Route");
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    return res.status(200).json(decoded);
  } catch (err) {
    console.log(err);
    return res.status(403).json({ error: "Token inválido" });
  }
}
