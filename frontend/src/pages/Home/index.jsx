import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Dropzone from 'react-dropzone'
import {

    useNavigate,
} from 'react-router-dom';
import UploadFilesService from '../../services/UploadFilesService'
export default function Home() {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const handleDrop = acceptedFiles => {
        setLoader(true)
        UploadFilesService.upload(acceptedFiles).then((resp) => {
            setLoader(false)
            navigate('/arquivos');
        });
    }
    return (
        <div className="App">
            {loader ?
                <Spinner animation="border" />
                :
                <Dropzone
                    onDrop={handleDrop}
                    accept=".txt"
                    minSize={1024}
                    maxSize={3072000}
                >
                    {({
                        getRootProps,
                        getInputProps,
                        isDragActive,
                        isDragAccept,
                        isDragReject
                    }) => {
                        const additionalClass = isDragAccept
                            ? "accept"
                            : isDragReject
                                ? "reject"
                                : "";

                        return (
                            <div
                                {...getRootProps({
                                    className: `dropzone ${additionalClass}`
                                })}
                            >
                                <input {...getInputProps()} />
                                <span>{isDragActive ? "📂" : "📁"}</span>
                                <p>Arraste e Solte arquivos aqui ou clique para carregar!!</p>
                            </div>
                        );
                    }}
                </Dropzone>
            }

        </div>
    );
}
