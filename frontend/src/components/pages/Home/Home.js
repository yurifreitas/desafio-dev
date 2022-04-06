import React, {useState} from "react";
import {Card, Button, Alert} from "react-bootstrap"
import {Link,useHistory} from "react-router-dom"
export default function Home(){
    const [error,setError] = useState("")
    const history = useHistory()
    return (
        <>
            <Link to="/" className="btn btn-primary w-100 mb-3">Home</Link>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Perfil</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email: </strong>
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Atualizar perfil</Link>
            </Card.Body>

        </Card>
            <div className="w-100 text-center mt-2">
               <Button variant="link" >Sair</Button>
            </div>
        </>
    )


}