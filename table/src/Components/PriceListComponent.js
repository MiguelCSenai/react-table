import { useState } from "react";
import Button from 'react-bootstrap/Button';

function PriceList(){

    let valor_a = 1;
    let valor_b = 2;
    let [total, setTotal] = useState(valor_a + valor_b);

    function AcaoBotao(){

        setTotal(total + 1);
        console.log(total);

    }

    return(

    <>

<table>

<tbody>

    <tr>

        <th>Valor 1</th>    <th>Valor 2</th>    <th>Total</th>

    </tr>

    <tr>

        <td>{valor_a}</td>    <td>{valor_b}</td>    <td>{total}</td>

    </tr>

</tbody>

</table>

<br/>

<button onClick={AcaoBotao}>Somar 1 no Total</button>
<Button variant="primary">Primary</Button>{' '}
    </>

    );

}
export default PriceList;