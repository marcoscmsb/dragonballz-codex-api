const express = require("express")

const api = express() // Cria APi com
api.use(express.json()) //Habilita o copor de requisições em Json
const cors = require("cors")
api.use(cors({    //Habilita o Cors (Cross Origin Resource Sharing)
    oring: "*"
}))

const PORT = process.env.PORT  || 3001



const personagens = [
    {
        nome: "Goku",
        imagem: "https://sm.ign.com/t/ign_br/screenshot/default/goku_an6e.h720.jpg"
    },
    {
        nome: "Vegita",
        imagem: "https://pm1.narvii.com/6323/552a11b9216f3ff3f35544fe22faac36247693af_hq.jpg"
    }
]



api.get("/", (req, res) =>{
    res.json( { mensagem: "Olá" } )
})

api.get("/personagens", (req, res) => {
    res.json(personagens)
})

api.post("/personagens", (req, res) => {
    personagens.push(req.body)
    res.json( { mensagem: "Personagens salvo com sucesso!" } )
})



api.listen(PORT, () =>{
    console.log("Api esta rodando" + PORT)
})