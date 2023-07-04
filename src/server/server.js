import express from "express"
import cors from "cors"
import fs from "fs"


const app = express()



app.use(cors())
app.use(express.json())

let dados

app.get("/cotacao", (req, res) => {
    res.status(200).json(dados)
})

app.post("/cotacao", (req, res) => {
  const novosDados = req.body;
  const dados = novosDados;

  let quoteData = '';

  dados.forEach((moeda) => {
    const nomeMoeda = moeda.nome;
    const cotacao = moeda.value[0];

    const quoteInfo = `${nomeMoeda} -- Cotação compra: ${cotacao.cotacaoCompra} -- Cotação venda: ${cotacao.cotacaoVenda} -- Data-Hora cotação: ${cotacao.dataHoraCotacao}\n`;

    quoteData += quoteInfo;
  });


  fs.writeFile("c:/Users/joao.scarpim/Desktop/cotacoes.txt", quoteData, (error) => {
    if (error) {
      console.error('Ocorreu um erro ao escrever os dados:', error);
      return res.status(500).json({ message: 'Ocorreu um erro ao salvar os dados' });
    }

    console.log('Dados salvos com sucesso!');
    res.status(200).json({ message: 'Dados salvos com sucesso' });
  });
});
    
const port = 8080
app.listen(port, () => console.log(`Rodando com sucesso na porta ${port}`))