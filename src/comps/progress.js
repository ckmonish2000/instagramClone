import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

export default function Progress({ file, setFile }) {
  const { progress, url } = useStorage(file);

  console.log(progress);
  console.log(url);
  return (
    <div
      className="progress-bar"
      style={{ width: progress + "%", background: "green", height: "2px" }}
    ></div>
  );
}
