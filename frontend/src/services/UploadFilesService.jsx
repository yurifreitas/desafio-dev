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
  async getFiles() {
    var response = await http.get("/files").then((resp)=>{
      return resp.data
    });
    return response
  }
}

export default UploadFilesService;