import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import UploadFilesService from '../../services/UploadFilesService'
export default function Home() {
    const [files, setFiles] = useState([]);
    const handleDrop = acceptedFiles => {
        UploadFilesService.upload(acceptedFiles);
    }
    const getfiles = () => {
        setFiles(UploadFilesService.getFiles())
    }

    return (
        <div className="App">
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
            <div>
                <strong>Arquivos:</strong>
                <ul>
                    {files.map(file => (
                        <li key={file.name}>{file.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
