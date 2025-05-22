export default function protectedRoute(req, res) {
  console.log(req.headers.authorization);

  if (!req.headers.authorization) {
    return res.status(401).send("Unprotected Route");
  }

  return res.status(200).json({ msg: "Protected Route" });
}
