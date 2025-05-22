import api from "../../axios.js";

export default async function confirmUser(req, res) {
  const token = req.query.token;

  const response = await api.get(`/confirm-user?token=${token}`);

  if (response.status == 200) {
    res.writeHead(301, { Location: "/login" });
    res.end();
  } else {
    return res.status(400).json({ msg: "Erro ao validar seu email" });
  }
}
