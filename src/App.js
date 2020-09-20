import React from "react";
import ImgGrid from "./comps/imgGrid";
import Title from "./comps/Title";
import Upload from "./comps/upload";

function App() {
  return (
    <div className="App">
      <Title />
      <Upload />
      <ImgGrid />
    </div>
  );
}

export default App;
