const express = require("express")
const mongoose = require("mongoose")

const api = express() // Cria APi com
api.use(express.json()) //Habilita o copor de requisições em Json
const cors = require("cors")
api.use(cors({    //Habilita o Cors (Cross Origin Resource Sharing)
    oring: "*"
}))


async function connetc(){
    await mongoose.connect("mongodb+srv://marcos:cmsbcelio45205420@cluster0.gt6iz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    console.log("Banco conectado com sucesso")
}
connetc()

const personagemSchema = new mongoose.Schema({
    nome: String,
    imagem: String
})

const personagemModel = mongoose.model("Personagem",personagemSchema)

const PORT = process.env.PORT  || 3001



api.get("/", (req, res) =>{
    res.json( { mensagem: "Olá Mundo" } )
})

api.get("/personagens", async (req, res) => {
    const resultado = await personagemModel.find({})  //Buscar todos
    res.json(resultado)
})

api.post("/personagens", async (req, res) => {
    const resultado = await personagemModel.create(req.body) // Cadastro de personagem
    res.json( { mensagem: "Personagens salvo com sucesso!" } )
})



api.listen(PORT, () =>{
    console.log("Api esta rodando" + PORT)
})