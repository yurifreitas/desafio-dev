import { useState } from "react";
import "./App.css";


function App() {
  const [fileOrFiles, setFile] = useState(null);
  const handleChange = fileOrFiles => {
    setFile(fileOrFiles);
    console.log("changes", fileOrFiles);
  };
  const onDrop = (fileOrFiles) => {
    console.log("drop", fileOrFiles);
  };
  const onSelect = (fileOrFiles) => {
    console.log("test", fileOrFiles);
  };

  const onTypeError = (err = 1) => console.log(err);
  const onSizeError = (err = 1) => console.log(err);
  console.log(fileOrFiles);
  return (
    <div className="App">
      <br />
      <button onClick={() => setFile(null)}>limpar </button>
    </div>
  );
}

export default App;
