import React, { useEffect, useState } from 'react'
import UploadFilesService from '../../services/UploadFilesService'
import { Link } from "react-router-dom";
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

                            <tr key={"row-" + item.id}>
                                <td key={item.id}>{item.id}</td>
                                <td key={item.line_number}>{item.line_number}</td>
                                <td key={item.transact_type}>{item.transact_type}</td>
                                <td key={item.transact_value}>{item.transact_value}</td>
                                <td key={item.transact_date}>{item.transact_date}</td>
                                <td key={item.dono_loja}><Link to={"/client?name=" + item.dono_loja}>{item.dono_loja}</Link></td>
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
