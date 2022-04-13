import React, { useEffect, useState } from 'react'
import UploadFilesService from '../../services/UploadFilesService'
import { Table } from 'react-bootstrap';
export default function Files() {
    const [filesItems, setFilesItems] = useState();
    useEffect(() => {
        UploadFilesService.getFiles().then((resp) => {
            setFilesItems(resp.lista)
        })

    }, []);
    console.log(filesItems);
    return (
        <div className="App">
            {filesItems ? (
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


                        {filesItems.map(item =>
                        (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.line_number}</td>
                                <td>{item.transact_type}</td>
                                <td>{item.transact_value}</td>
                                <td>{item.transact_date}</td>
                                <td>{item.dono_loja}</td>
                                <td>{item.nome_loja}</td>
                                <td>{item.transact_card}</td>
                                <td>{item.cpf}</td>
                                <td>{item.transact_time}</td>
                            </tr>

                        )
                        )}


                    </tbody>
                </Table>) : ""
            }
        </div >
    );
}
