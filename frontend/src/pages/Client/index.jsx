import React, { useEffect, useState } from 'react'
import UploadFileService from '../../services/UploadFilesService'
import { Table } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
export default function Client() {
    const [ClientItems, setClientItems] = useState();
    const [valueTotal, setValueTotal] = useState();
    const [searchParams] = useSearchParams();
    useEffect(() => {

        UploadFileService.getClient(searchParams).then((resp) => {
            setClientItems(resp.lista)
            setValueTotal(resp.total)
        })

    }, []);
    console.log(ClientItems);
    return (
        <div className="App">
            {ClientItems ? (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NUMERO LINHA</th>
                            <th>TIPO</th>
                            <th>DATA</th>
                            <th>DONO LOJA </th>
                            <th>NOME LOJA </th>
                            <th>CPF </th>
                            <th>CARTÃO </th>
                            <th>HORARIOS </th>
                            <th>VALOR</th>
                        </tr>
                    </thead>
                    <tbody>


                        {ClientItems.map(item =>
                        (
                            <tr key={"row-" + item.id}>
                                <td key={item.id}>{item.id}</td>
                                <td key={item.line_number}>{item.line_number}</td>
                                <td key={item.transact_type}>{item.transact_type}</td>
                                <td key={item.transact_date}>{item.transact_date}</td>
                                <td key={item.dono_loja}>{item.dono_loja}</td>
                                <td key={item.nome_loja}>{item.nome_loja}</td>
                                <td key={item.transact_card}>{item.transact_card}</td>
                                <td key={item.cpf}>{item.cpf}</td>
                                <td key={item.transact_time}>{item.transact_time}</td>
                                <td key={item.transact_value}>{"R$ "+item.transact_value}</td>
                            </tr>


                        )
                        )}


                    </tbody>
                    <tfoot>
                        <tr key={"total"}>
                            <td colSpan={9} className={"text-center"}> <strong>Valor Total em conta:</strong> </td>
                            <td colSpan={1} className={"text-center"}>{"R$ " + valueTotal}</td></tr>
                    </tfoot>
                </Table>) : ""
            }
        </div >
    );
}
