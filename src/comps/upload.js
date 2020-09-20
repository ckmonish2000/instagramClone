import React, { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    var selected = e.target.files[0];
    console.log(selected);
    var types = ["image/jpeg", "image/png", "image/jpg"];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select a valid image file");
    }
  };

  return (
    <div>
      <form>
        <input type="file" name="image" onChange={changeHandler}></input>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
      </form>
    </div>
  );
}
