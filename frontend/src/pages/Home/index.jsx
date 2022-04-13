import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import UploadFilesService from '../../services/UploadFilesService'
export default function Home() {
    const handleDrop = acceptedFiles => {
        UploadFilesService.upload(acceptedFiles);
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
           
        </div>
    );
}
