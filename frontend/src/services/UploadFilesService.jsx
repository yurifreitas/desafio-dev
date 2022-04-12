import http from "../common/http-common";

const UploadFilesService = {
  upload(files) {
    let formData = new FormData();
    files.map(file => {
      formData.append("file", file);
    })
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getFiles() {
    return http.get("/files");
  }
}

export default UploadFilesService;