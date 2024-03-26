import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Tabela</title>
</head>
<body>

    <center>
    <table class="tabela">

        <thead>
            <tr class="cinza">

                <th class="titulo" colspan="6">Vendas</th>

            </tr>

        </thead>

        <tbody>

            <tr class="sub">

                <td class="num">#</td>    <td>Produto</td>    <td>Categoria</td>    <td class="qt">Qtde</td>    <td class="pr">Preço Unitário</td>    <td class="pr">Total</td>

            </tr>

            <tr class="branco">

                <td class="num">1</td>    <td>Produto 1</td>    <td>Categoria 1</td>    <td class="qt">5</td>    <td class="pr">R$ 10,00</td>    <td class="pr">R$ 50,00</td>

            </tr>

            <tr class="cinza">

                <td class="num">2</td>    <td>Produto 2</td>    <td>Categoria 2</td>    <td class="qt">4</td>    <td class="pr">R$ 35,00</td>    <td class="pr">R$ 140,00</td>

            </tr>

            <tr class="branco">

                <td class="num">3</td>    <td>Produto 3</td>    <td>Categoria 3</td>    <td class="qt">3</td>    <td class="pr">R$ 41,00</td>    <td class="pr">R$ 123,00</td>

            </tr>
            
            <tr class="cinza">
    
                <td colspan="3"></td>                                                               <td class="qt">12</td>    <td class="pr">R$ 86,00</td>    <td class="pr">R$ 313,00</td>
    
            </tr>

        </tbody>

    </table>
    </center>
</body>
      </header>
    </div>
  );
}

export default App;
