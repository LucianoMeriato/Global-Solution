const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const usuario = {
    email: "seuemail@gmail.com",
    senha: "$2a$10$S2FTUyyPbTLgfL9WgTeL5uGmbFF68tZpzqPf8vNMBwDZl2Y4F7Vdu"
};

app.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    if (email !== usuario.email) {
        return res.status(401).json({ message: "E-mail ou senha inválidos." });
    }

    try {
        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ message: "E-mail ou senha inválidos." });
        }

        const token = jwt.sign({ email: usuario.email }, "secreta", { expiresIn: "1h" });

        res.status(200).json({ message: "Login bem-sucedido!", token });
    } catch (error) {
        res.status(500).json({ message: "Erro interno no servidor." });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
