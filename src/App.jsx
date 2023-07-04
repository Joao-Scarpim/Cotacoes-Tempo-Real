import { useState, useEffect } from 'react';
import axios from 'axios';
import { format, subDays } from 'date-fns';

import './App.css';

function App() {
  const [dolarValue, setDolarValue] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [sevenDaysAgo, setSevenDaysAgo] = useState('');
  const [cotacoes, setCotacoes] = useState([]);

  useEffect(() => {
    const today = new Date();
    const formattedCurrentDate = format(today, 'MM-dd-yyyy');
    setCurrentDate(formattedCurrentDate);

    const calculatedDate = subDays(today, 7);
    const formattedSevenDaysAgo = format(calculatedDate, 'MM-dd-yyyy');
    setSevenDaysAgo(formattedSevenDaysAgo);
  }, []);

  const fetchDolarQuote = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json`
      );
      const data = response.data;
      const dolarQuote = data.value;
      const dolarObject = {
        nome: "Dólar",
        value: dolarQuote
      };
      setDolarValue(dolarObject);
      setCotacoes(prevCotacoes => [...prevCotacoes, dolarObject]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEuroQuote = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='EUR'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const euroQuote = data.value;
      const euroObject = {
        nome: "Euro",
        value: euroQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, euroObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDolarAustQuote = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='AUD'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const dolarAustQuote = data.value;
      const dolarAustObject = {
        nome: "Dólar Australiano",
        value: dolarAustQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, dolarAustObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDolarCana = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='CAD'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const dolarCanaQuote = data.value;
      const dolarCanaObject = {
        nome: "Dólar Canadense",
        value: dolarCanaQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, dolarCanaObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFrancoSuico = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='CHF'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const francoSuicoQuote = data.value;
      const francoSuicoObject = {
        nome: "Franco Suíço",
        value: francoSuicoQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, francoSuicoObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCoroaDin = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='DKK'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const coroaDinQuote = data.value;
      const coroaDinObject = {
        nome: "Coroa Dinamarquesa",
        value: coroaDinQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, coroaDinObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLibraEster = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='GBP'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const libraEsterQuote = data.value;
      const libraEsterObject = {
        nome: "Libra Esterlina",
        value: libraEsterQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, libraEsterObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIene = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='JPY'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const IeneQuote = data.value;
      const IeneObject = {
        nome: "Iene",
        value: IeneQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, IeneObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCoroaNor = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='NOK'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const coroaNorQuote = data.value;
      const coroaNorObject = {
        nome: "Coroa Norueguesa",
        value: coroaNorQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, coroaNorObject]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCoroaSue = async () => {
    try {
      const response = await axios.get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='SEK'&@dataInicial='${sevenDaysAgo}'&@dataFinalCotacao='${currentDate}'&$top=1&$skip=0&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
      );
      const data = response.data;
      const coroaSueQuote = data.value;
      const coroaSueObject = {
        nome: "Coroa Sueca",
        value: coroaSueQuote
      };
      setCotacoes(prevCotacoes => [...prevCotacoes, coroaSueObject]);
    } catch (error) {
      console.log(error);
    }
  };




  const requisicaoCotacoes = async () => {
    try {
      await axios.post("http://localhost:8080/cotacao", cotacoes);
      setDolarValue(null)
    } catch (error) {
      console.log(error);
    }
  };

  const executeCode = async () => {
    setCotacoes([])
    await fetchDolarQuote();
    console.log(cotacoes)
    const checkboxes = document.getElementsByName('option');

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const optionValue = checkbox.value;

        // Executar código para cada opção marcada
        switch (optionValue) {
          case 'EUR':
            fetchEuroQuote();
            break;
          case 'AUD':
            fetchDolarAustQuote()
            break;
          case 'CAD':
            fetchDolarCana()
            break;
          case 'CHF':
            fetchFrancoSuico()
            break
          case 'DKK':
            fetchCoroaDin()
            break
          case 'GBP':
            fetchLibraEster()
            break
          case 'JPY':
            fetchIene()
            break
          case 'NOK':
            fetchCoroaNor()
            break
          case 'SEK':
            fetchCoroaSue()
            break
          default:
            break;
        }
      }
    });
  };

  return (
    <div className='main-container'>
      <h2>Pegar cotação atual</h2>
      <div className='main-input-div'>
        <div className="main-checkbox">
          <div>
            <input type="checkbox" id="EUR" name="option" value="EUR"></input>
            <label htmlFor="EUR">Euro</label>
          </div>
          <div>
            <input type="checkbox" id="AUD" name="option" value="AUD"></input>
            <label htmlFor="AUD">Dólar Australiano</label>
          </div>
          <div>
            <input type="checkbox" id="CAD" name="option" value="CAD"></input>
            <label htmlFor="CAD">Dólar Canadense</label>
          </div>
          <div>
            <input type="checkbox" id="CHF" name="option" value="CHF"></input>
            <label htmlFor="CHF">Franco Suíco</label>
          </div>
          <div>
            <input type="checkbox" id="DKK" name="option" value="DKK"></input>
            <label htmlFor="DKK">Coroa Dinamarquesa</label>
          </div>
          <div>
            <input type="checkbox" id="GBP" name="option" value="GBP"></input>
            <label htmlFor="GBP">Libra Esterlina</label>
          </div>
          <div>
            <input type="checkbox" id="JPY" name="option" value="JPY"></input>
            <label htmlFor="JPY">Iene</label>
          </div>
          <div>
            <input type="checkbox" id="NOK" name="option" value="NOK"></input>
            <label htmlFor="NOK">Coroa Norueguesa</label>
          </div>
          <div>
            <input type="checkbox" id="SEK" name="option" value="SEK"></input>
            <label htmlFor="SEK">Coroa Sueca</label>
          </div>
          

        </div>
        <div className="main-buttons">
          <button className='data-button' onClick={executeCode}>
            Click
          </button>
          {dolarValue && (
            <button className='data-button' onClick={requisicaoCotacoes}>Gerar txt</button>
          )}
        </div>
      </div>
      {cotacoes.length > 0 && (
        <table className='main-table'>
          <thead>
            <tr>
              <th>Moeda</th>
              <th>Cotação compra</th>
              <th>Cotação venda</th>
              <th>Data-hora-cotação</th>
            </tr>
          </thead>
          <tbody>
            {cotacoes.map((moeda, index) => (
              <tr key={index}>
                <td>{moeda.nome}</td>
                <td>{moeda.value[0].cotacaoCompra}</td>
                <td>{moeda.value[0].cotacaoVenda}</td>
                <td>{moeda.value[0].dataHoraCotacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
