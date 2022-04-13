import React, { useEffect, useState } from 'react'
import UploadFileService from '../../services/UploadFilesService'
import { Table } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
export default function Client() {
    const [ClientItems, setClientItems] = useState();
    const [searchParams] = useSearchParams();
    useEffect(() => {

        UploadFileService.getClient(searchParams).then((resp) => {
            setClientItems(resp.lista)
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
                            <th>VALOR</th>
                            <th>DATA</th>
                            <th>DONO LOJA </th>
                            <th>NOME LOJA </th>
                            <th>CPF </th>
                            <th>CARTÃO </th>
                            <th>HORARIOS </th>
                        </tr>
                    </thead>
                    <tbody>


                        {ClientItems.map(item =>
                        (
                            <tr key={"row-"+item.id}>
                                  <td key={item.id}>{item.id}</td>
                                    <td key={item.line_number}>{item.line_number}</td>
                                    <td key={item.transact_type}>{item.transact_type}</td>
                                    <td key={item.transact_value}>{item.transact_value}</td>
                                    <td key={item.transact_date}>{item.transact_date}</td>
                                    <td key={item.dono_loja}>{item.dono_loja}</td>
                                    <td key={item.nome_loja}>{item.nome_loja}</td>
                                    <td key={item.transact_card}>{item.transact_card}</td>
                                    <td key={item.cpf}>{item.cpf}</td>
                                    <td key={item.transact_time}>{item.transact_time}</td>
                            </tr>

                        )
                        )}


                    </tbody>
                </Table>) : ""
            }
        </div >
    );
}
