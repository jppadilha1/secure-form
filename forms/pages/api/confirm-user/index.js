import api from "../../axios.js";

export default async function confirmUser(req, res) {
  const token = req.query.token;

  const response = await api.get(`/confirm-user?token=${token}`);
  console.log(response.data);
  return res.status(200).send("confirmado com sucesso");
}
